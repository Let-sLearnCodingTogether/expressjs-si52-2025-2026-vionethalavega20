import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
{
    username : {
        type : String,
        required : [true, "Username wajib diisi"],
        unique : true, // disesuaikan dengan nama
        trim : true // menghapus spasi di depan dan belakang
    },
    email: {
        type : String,
        required : [true, "Email wajib diisi"],
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : [true, "Password wajib diisi"]
    }
},
    {
        timestamps : true
    }
)

const UserModel = mongoose.Model("User", UserSchema)

export default UserModel