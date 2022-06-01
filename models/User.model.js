const mongoose = require("mongoose")
const { Schema, model } = mongoose

const userSchema = new Schema({
    userType: {
        enum: ["mentor", "mentee"]
    },	
    email: {
        type: String, unique: true, required: true
    },
    password: {
        type: String, required: true
    },
    username: {
        type: String, required: true, unique: true
    },
    aboutMe: {
        type:String, default: ""
    },
    profileImg: {
        type: String, default:"http://cdn.onlinewebfonts.com/svg/img_574534.png"
    },
    token: {
        type: Number, default: 100
    },
    chats: [{
        type: Schema.Types.ObjectId, ref:"chat"
    }],
    ocuppation:	{
        type:String
    },		
    company: {
        type:String
    },
    skills: {
        type: String,
        enum : ['React', 'NodeJS', 'Express', 'MongoDB', 'Canvas', 'Cloudinary', 'Moongoose', 'JavaScript', 'Python', 'Front-end', 'Back-End', 'Wireframe', 'Prototype', 'Mockup', 'Userflow', 'Figma', 'Sketch', 'Photoshop', 'Information Arcitechture', 'HTML', 'CSS', 'GitHub', 'Visual Code', 'SQL', 'Microsoft Excel', 'R', 'Data Visualization', 'Presentation Skills', 'Machine Learning', 'MATLAB', 'Data Cleaning', 'Linear Algebra', 'Calculus', 'Communication skills']
    },
    course: {
        type: String,
        enum: ['Web Development', 'UX/UI', 'Data Analytics']
    },
    graduationYear:	{
        type:Number
    },	
})

module.exports = model("User", userSchema)

