const model = require('../../model/comment_model');
const bookModel = require('../../model/book.model')
const userModel = require("../../model/user_model")
const  code=require("http-status-codes").StatusCodes

exports.addCommet = async (req, res, next) => {
     var kq;
     
    if (req.method == 'POST') {
        try {
            var userId = req.body.user_id
            var user = await userModel.User.findOne({_id:userId})
            var user1= {
                _id: user._id,
                username: user.username,
                fullname: user.fullname
            }
            var comment ={
                book_id: req.body.book_id,
                user: user1,
                content: req.body.content
            }

            if(typeof(req.body) == 'object'){
                kq = await model.Comment.insertMany(comment);  
            }  
            res.status(code.OK).json({status: "Thành công"})
            console.log(kq);
        } catch (error) {
           res.status(code.FORBIDDEN).send({status : " Thêm không thành công"})
           console.log(error.message)
        }
    }
 
}
exports.deleteComment = async (req, res, next) =>{
    var id = req.query.id
    console.log(req.query)
    var data = await model.Comment.deleteOne({_id: id})
    if(data.deletedCount>0)
        res.status(200).send(data)
    else
        res.status(code.BAD_REQUEST).json({status: "Xoá không thành công"})


}

exports.getAllComment= async(req, res, next) =>{
    var data = await  model.User.find({})
    res.status(code.OK).json(data)

}

exports.getCommnetById = async(req,res, next) =>{
    var id = req.query.id
    var data = await model.Comment.find({_id: id})
    res.status(200).json(data)
}

exports.updateComment = async (req, res, next) =>{
    var kq;
    const id = req.query.id
    var userId = req.body.user_id
    var user = await userModel.User.find({_id:userId})
    var comment ={
        book_id: req.body.book_id,
        user: user,
        content: req.body.content
    }
    if (req.method == 'POST') {
        // lấy dữ liệu 
        // ghi csdl
        // có thể dùng try catch để bắt lỗi
        try {
            if(typeof(req.body) == 'object'){
                kq = await model.Comment.updateOne({_id: id},  comment);  
            }  
            res.status(code.OK).json({status: "Thành công"})
            console.log(kq);
        } catch (error) {
           res.status(code.FORBIDDEN).send({status : " Không thành công"})
           console.log(error.message)
        }
    }
}

exports.getAllCommentByBookId =async(req, res, next) =>{
    const id = req.query.id

    //build object
        var kq = await model.Comment.find({book_id: id})
  
    res.send({data:kq})
}