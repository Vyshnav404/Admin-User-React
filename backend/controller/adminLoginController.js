const adminCredential = require('../model/adminCredentialModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const adminLogin = async (req,res)=>{
    let{username,password} = req.body;
    console.log(req.body,"kkk");
    try{
        const admin = await adminCredential.findOne({username});
        console.log(admin)
        if(admin) {
            const validPassword = await bcrypt.compare(password,admin.password);
            if(validPassword) {
                const token =jwt.sign({
                    username:admin.username
                },
                'secret123'
                )
                res.status(201).json({admin,token});
                console.log("correct");
            }else{
                console.log("Password Wrong");
            }
        }else{
            console.log("No user");
        }
    }catch (error) {
        console.log(error);
    }

}

module.exports = {
    adminLogin
}