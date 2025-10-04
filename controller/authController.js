import UserModel from "../models/userModel.js";

export const register = async(requestAnimationFrame,res)=>{
    try{

        // untuk mengambil data
        const registerData = requestAnimationFrame.body

        console.log(registerData);

        await UserModel.create({
            username: registerData.username,
            email: registerData.email,
            password: registerData.password
        })


        res.status(201).json({
            message : "Berhasil register, silakan login",
            date : null
    })

        }catch(e){
        res.status(500).json({
            message : e.message,
            date : null
        })
    }
}