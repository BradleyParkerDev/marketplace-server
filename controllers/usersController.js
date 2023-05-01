const { uuid } = require("uuidv4");
const User = require('../models/Users');

const {
  generatePasswordHash,
  validatePassword,
  generateUserToken,
  verifyToken,
} = require("../auth");


//Registration
async function registration(req, res, next) {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const pronouns = req.body.pronouns;
    console.log(req.body)
    const saltRounds = 5; // In a real application, this number would be somewhere between 5 and 10

    const passwordHash = await generatePasswordHash(password, saltRounds);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      dob: dob,
      gender: gender,
      pronouns: pronouns,
      password: passwordHash,
      id: uuid(), // uid stands for User ID. This will be a unique string that we will can to identify our user
    });
    console.log(password)
    console.log(passwordHash)
    //mongoose
    const insertResult = await newUser.save();


    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.toString() });
  }
};

//Login
async function login(req, res, next){
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({
      email,
    });

    if (!user) {
      res.json({ success: false, message: "Could not find user." }).status(204);
      return;
    }
    console.log(user)
    console.log(password)


    const isPWValid =  validatePassword(password, user.password);

    if (!isPWValid) {
      res
        .json({ success: false, message: "Password was incorrect." })
        .status(204);
      return;
    }

    const userType = email.includes("admin.com") ? "Admin" : "User";

    const data = {
      date: new Date(),
      userId: user.id, 
      scope: userType,

			email: email
    };

    const token =  generateUserToken(data);
    const userFirstName = user.firstName
    const userId = user.id
    res.json({ success: true, token, email, userType,  userFirstName, userId});
    console.log(token)

    return;
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.toString() });
  }
};

async function getUser(req, res, next){
  try {
      const user = await User.findOne({id:req.params.id});
      res.json({user: user });
    }catch(e){
      console.log(e);
    }

}

//Update
async function updateUser(req, res, next){
  const entryId = req.params.id;
  try {

    const updatedBody = {
      userImage: req.body.url,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      dob: req.body.dob,
      gender: req.body.genderValue,
      pronouns: req.body.pronouns
    }
    if(req.body.password !== ""){
      const saltRounds = 5; // In a real application, this number would be somewhere between 5 and 10
      const passwordHash = await generatePasswordHash(password, saltRounds);
      updatedBody.password = passwordHash;
    }

    const response = await User.updateOne({ id: entryId }, updatedBody);


    res.json({success: true, userUpdates: response });

  }catch(e){
    console.log(e);
  }

}
//Delete
async function deleteUser(req, res, next){
  const entryId = req.params.id;

  try {
      await User.deleteOne({id: entryId});
  } catch (err) {
      console.log(err);
      throw err;  
  }

  res.json({
      success: true,
      message: `user with id ${entryId} deleted`
  })

}

//Message
async function message(req, res, next){
  try {
    const tokenHeaderKey = process.env.TOKEN_HEADER_KEY;

    const token = req.header(tokenHeaderKey);

		console.log("token ", token)

		const verifiedTokenPayload = verifyToken(token)

    if (!verifiedTokenPayload) {
      return res.json({
        success: false,
        message: "ID Token could not be verified",
      });
    }

		console.log(verifiedTokenPayload)
    const userData = verifiedTokenPayload.userData;

    if (userData && userData.scope === "User") {
      return res.json({
        success: true,
        message: `I am a normal user with the email: ${userData.email}`,
      });
    }

		if (userData && userData.scope === "Admin") {
      return res.json({
        success: true,
        message: `I am an admin user with the email ${userData.email}`,
      });
    }

    throw Error("Access Denied");
  } catch (error) {
    // Access Denied
    return res.status(401).json({ success: false, message: error });
  }
};

module.exports = {
  registration,
  login,
  getUser,
  updateUser,
  deleteUser,
  message 
};