import mongoose from "mongoose"

export const connect = async (): Promise<void> => {   // check success or fail
    try {
        console.log(process.env.MONGO_URL)
        await mongoose.connect(process.env.MONGO_URL) // connect mongoose
        console.log("Connect Success!")
    } catch(error) {
        console.error("Connect Error!", error) // Print the actual error
    }
}
