import UserModel from "../models/userModel.js";
import { hash } from "../utils/hashUtil.js";

export const register = async(req,res)=>{
    try{

        // untuk mengambil data
        const registerData = requestAnimationFrame.body

        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username: registerData.username,
            email: registerData.email,
            password: hashPassword
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

export const login = async(req,res)=>{
    try{
        const loginData = req.body

        // Mencari user berdasarkan email
        const user = await UserModel.findOne({
            email : loginData.email,
        })

        if(!user){
            return res.status(404).json({
                message : "User tidak ditemukan",
                data : null
            })
        }

        // Membandingkan passsword yg ada didalam db dgn request
        if(user.password == loginData.password){
            return res.status(200).json({
                message : "Login berhasil",
                data : {
                    username : user.username,
                    email : user.email,
                    token : "TOKEN"
                }
            })
        }
        return res.status(401).json({
            message : "Login gagal",
            data : null
        })

    }catch(error){
        res.status(500).json({
            message : error,
            data : null
        })
    }
}