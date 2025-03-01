import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number },
    email: { type: String, required: true },
    college: { type: String },
    course: { type: String },
    year: { type: String },
    admin : {type : Boolean},
    events: [{
        eventName: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Event",
            unique: function () {
                return this.eventName !== null;
            }
        },
        status: {
            type: String,
            required: true,
            default: "Pending"
        }
    }],
    preEvents: [{
        eventName: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "PreEvent",
            unique: function () {
                return this.eventName !== null;
            }
        },
        status: {
            type: String,
            required: true,
            default: "Pending"
        }
    }],
    guestTalks: [{
        eventName: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "GuestTalks",
            unique: function () {
                return this.eventName !== null;
            }
        },
        status: {
            type: String,
            required: true,
            default: "Pending"
        }
    }]
})

const userModel =mongoose.model("users", userSchema);

export default userModel;