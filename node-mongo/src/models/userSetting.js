const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const userSettingSchema = mongoose.Schema({
    user: {
        type: ObjectID,
        required: true,
        ref: 'User'
    },
    theme: {
        type: String,
        default: "light",
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    }
});


const UserSetting = mongoose.model('UserSetting', userSettingSchema);

module.exports = UserSetting;