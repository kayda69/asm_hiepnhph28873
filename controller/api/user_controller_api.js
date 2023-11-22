const { json } = require('body-parser');
const model = require('../../model/user_model');
const  code=require("http-status-codes").StatusCodes

exports.addUser = async (req, res, next) => {
     var kq;
    if (req.method == 'POST') {
        try {
            if(typeof(req.body) == 'object'){
                kq = await model.User.insertMany(req.body);  
            }  
            res.status(code.OK).json({status: "Thành công"})
            console.log(kq);
        } catch (error) {
           res.status(code.FORBIDDEN).send({status : " Thêm không thành công"})
           console.log(error.message)
        }
    }
 
}
exports.deleteUser = async (req, res, next) =>{
    var id = req.body.id
    console.log(req.query)
    var data = await model.User.deleteOne({_id: id})
    if(data.deletedCount>0)
        res.status(200).send(data)
    else
        res.status(code.BAD_REQUEST).json({status: "Xoá không thành công"})


}

exports.getAllUser= async(req, res, next) =>{
    var data = await  model.User.find({})
    res.status(code.OK).json(data)

}

exports.getUserById = async(req,res, next) =>{
    var id = req.query.id
    var data = await model.User.find({_id: id})
    res.status(200).json(data)
}

exports.updateUser = async (req, res, next) =>{
    var kq;
    const id = req.query.id
    if (req.method == 'POST') {
        // lấy dữ liệu 
        // ghi csdl
        // có thể dùng try catch để bắt lỗi
        try {
            if(typeof(req.body) == 'object'){
                kq = await model.User.updateOne({_id: id},  req.body);  
            }  
            res.status(code.OK).json({status: "Thành công"})
            console.log(kq);
        } catch (error) {
           res.status(code.FORBIDDEN).send({status : " Không thành công"})
           console.log(error.message)
        }
    }
}
exports.logInUser = async(req,res,next) =>{
  
    console.log(req.body)
    var data = await model.User.findOne(req.body)
    if(data != null)
    res.status(200).json( {status: "Đăng nhập thành công"})
    else
    res.status(code.FORBIDDEN).json({status: "Đăng nhập thất bại"})
}