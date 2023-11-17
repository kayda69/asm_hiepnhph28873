var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser')
// nhúng con troller
var cmtCtrl = require("../controller/api/comment_controller_api");


//thêm
router.post("/create", cmtCtrl.addCommet);
//xoá
router.post("/delete", cmtCtrl.deleteComment)
// sửa
router.post("/update", cmtCtrl.updateComment)
//lấy thông tin tất cả user, only admin
router.get("/getall", cmtCtrl.getAllComment)

//
router.get("/comments", cmtCtrl.getAllCommentByBookId)
// không được quên
module.exports = router;