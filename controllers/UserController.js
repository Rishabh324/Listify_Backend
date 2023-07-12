const User = require('../model/userModel');

exports.addUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                newUser
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}

exports.tryLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user){
            if(user.password === req.body.password){
                
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}