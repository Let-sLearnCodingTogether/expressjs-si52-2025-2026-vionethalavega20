export const register = async(request,res)=>{
    try{
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