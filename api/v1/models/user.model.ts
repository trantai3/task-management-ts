import { generateRandomString } from './../../../helpers/generate';
import mongoose from "mongoose"


const userSchema = new mongoose.Schema(
    {
        fullName: String,
        email: String,
        password: String,
        token: {
            type: String,
            default: () => generateRandomString(20)
        },
        deleted: {
            type: Boolean,
            default: false
        },
        deletedAt: Date
    }, {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema, "users")  // 1: name module 3: collection

export default User