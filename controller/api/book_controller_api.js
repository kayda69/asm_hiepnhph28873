const { request } = require('express');
const model = require('../../model/book.model');
const  code=require("http-status-codes").StatusCodes

exports.addBook = async (req, res, next) => {
     var kq;
     var files = req.files;
     var paths = []
   files.map(e=>{
    paths.push(e.filename)
   })
    if (req.method == 'POST') {
        try {
            
            if(typeof(req.body) == 'object'){
                req.body["pictures"] = paths
                kq = await model.Book.insertMany(req.body);  
            }  
            res.status(code.OK).json({status: "Thành công"})
            console.log(kq);
        } catch (error) {
           res.status(code.FORBIDDEN).send({status : " Thêm không thành công"})
           console.log(error.message)
        }
    }
 
}
exports.deleteBook  = async (req, res, next) =>{
    var id = req.query.id
    console.log(req.query)
    var data = await model.Book.deleteOne({_id: id})
    if(data.deletedCount>0)
        res.status(200).send(data)
    else
        res.status(code.BAD_REQUEST).json({status: "Xoá không thành công"})


}

exports.getAllBook = async(req, res, next) =>{
    var data = await  model.Book.find({})
    res.status(code.OK).json(data)

}

exports.getBookById = async(req,res, next) =>{
    var id = req.query.id
    var data = await model.Book.find({_id: id})
    res.status(200).json(data)
}

exports.updateBook = async (req, res, next) =>{
    var kq;
    const id = req.query.id
    if (req.method == 'POST') {
        // lấy dữ liệu 
        // ghi csdl
        // có thể dùng try catch để bắt lỗi
        try {
            if(typeof(req.body) == 'object'){
                kq = await model.Book.updateOne({_id: id},  req.body);  
            }  
            res.status(code.OK).json({status: "Thành công"})
            console.log(kq);
        } catch (error) {
           res.status(code.FORBIDDEN).send({status : " Không thành công"})
           console.log(error.message)
        }
    }
}