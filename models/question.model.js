const { Schema, model } = require("mongoose");

const questionSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Name is mandatory']
        },
        description: {
            type: String,
            required: [true, 'Description is mandatory'],
        },
        code: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [{
            type: Schema.Types.ObjectId,
            ref: 'comments'
        }],	
        skills: [{
            type: Schema.Types.ObjectId, ref:"Skills"
        }]
    },
    {
        timestamps: true
    }
);

const Question = model("Question", questionSchema)

module.exports = Question;
