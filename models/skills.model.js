const { Schema, model } = require("mongoose");

const skillsSchema = new Schema(
    {
    name: {
        type: String,
        enum : ['React', 'NodeJS', 'Express', 'MongoDB', 'Canvas', 'Cloudinary', 'Moongoose', 'JavaScript', 'Python', 'Front-end', 'Back-End', 'Wireframe', 'Prototype', 'Mockup', 'Userflow', 'Figma', 'Sketch', 'Photoshop', 'Information Arcitechture', 'HTML', 'CSS', 'GitHub', 'Visual Code', 'SQL', 'Microsoft Excel', 'R', 'Data Visualization', 'Presentation Skills', 'Machine Learning', 'MATLAB', 'Data Cleaning', 'Linear Algebra', 'Calculus', 'Communication skills']
    }
    
    }
);

const Skills = model("Skills", skillsSchema)

module.exports = Skills;