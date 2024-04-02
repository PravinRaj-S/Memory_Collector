const UserModel = require('../Models/UserModel')
const bcrypt    = require("bcrypt")
const jwt       = require('jsonwebtoken')
const JWT_SECRET_KEY = "Pravin";
const {promisify} = require('util');

exports.registerUser = async (req, res) => {

    const {name, email, password} = req.body

    try {
        var existingUser = await UserModel.findOne({email:email})
    } catch (error) {
        console.log(error)
    }

    if(existingUser){
        return res.status(400).json({message:"User already exists ! Login instead"})
    }

    var hashedPassword = await bcrypt.hash(password, 8)

    const user = new UserModel({
        name,email,password:hashedPassword
    })

    try {
        await user.save()
    } catch (error) {
        console.log(error)
    }

    return res.status(201).json({message: user})
}

exports.loginUser = async (req, res) =>{

    const {email, password}  = req.body

    try {
        var existingUser = await UserModel.findOne({email:email})
    } catch (error) {
        console.log(error)
    }

    if(!existingUser){
        return res.status(400).json({message:"User Not found Sign Up please"})
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

    if(!isPasswordCorrect){
        return res.status(400).json({message:"Invalid Password"})
    }

    const token = jwt.sign({id:existingUser._id}, JWT_SECRET_KEY, {
        expiresIn:'1hr'
    })

    const cookieOption = {expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), httpOnly : true, sameSite: "lax"}
    res.cookie("login", token, cookieOption);

    return res.status(200).json({message: "User logged in Successfully", user: existingUser, token: token})
    
}

exports.verifyToken = async (req, res, next) => {

    if(req.cookies.login){
        const tokenDetails = await promisify(jwt.verify)(req.cookies.login, JWT_SECRET_KEY);
        req.id = tokenDetails.id
        next()
    }else{
        return res.status(400).json({message: "Cookies Not Found"}) 
    }

}

exports.getUser = async (req, res, next) => {
    
    const userID = req.id

    try {
        var user = await UserModel.findById(userID, "-password") 
    } catch (error) {
        console.log(error)
    }

    if(!user){
        return res.status(400).json({message: "User Not Found"})
    }

    return res.status(200).json(user)
}