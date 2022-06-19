const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
    {
    user: {
         type: Schema.Types.ObjectId, ref:"User"
        }, 
    text: {
         type:String,
         required:true
        }
    
    },
    { timestamps: true }
);

const Comments = model("Comments", commentsSchema)

module.exports = Comments;