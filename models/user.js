const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: "username Expected",
        trim: true,
        unique: true
      },
      email: {
        type: String,
        required: "email is required",
        unique: true,
        match: [/.+\@.+\..+/]
      },
        thoughts: [thoughtSchema],
        friends: [userSchema],
    },
    {
    toJSON: {
        virtuals: true,
      },
    } 
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);
module.exports = User;