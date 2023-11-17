var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser')
// nhúng con troller
var control = require("../controller/api/book_controller_api");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads');
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+".jpg");
    },
  });
  
  var upload = multer({ storage: storage });

//thêm
router.post("/create", upload.array('book_img'),control.addBook);
//xoá
router.post("/delete", control.deleteBook)
// sửa
router.post("/update", control.updateBook)
//lấy thông tin tất cả user, only admin
router.get("/getall", control.getAllBook)
// không được quên
module.exports = router;