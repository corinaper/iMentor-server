const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
    {
    user: {
         type: Schema.Types.ObjectId, ref:"User"
        }, 
    text: {
         type:String
        },
    timestamp:true
    },
);

const Comments = model("comments", commentsSchema)

module.exports = Comments;