import mongoose from "mongoose"

const linkSchema = new mongoose.Schema(
{
    title : {
        type : String,
        required : [true, "Title wajib diisi"]
    },
    icon : {
        type : String,
        required : [true, "Icon wajib diisi"]
    },
    url : {
        type : String,
        required : [true, "Url wajib diisi"],
        trim : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "User",
        required : true
    }
},
    {
        timestamps : true
    }
)

const linkModel = mongoose.Model("Link", linkSchema)

export default linkModel
