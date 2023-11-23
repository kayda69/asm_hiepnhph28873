var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
// nhúng con troller
var userCtrl = require("../controller/api/user_controller_api");

var jsonParser = bodyParser.json();

//thêm
router.post("/create", userCtrl.addUser);
//xoá
router.post("/delete", userCtrl.deleteUser);
// sửa
router.post("/update", userCtrl.updateUser);
//lấy thông tin tất cả user, only admin
router.get("/getall", userCtrl.getAllUser);

router.post("/login", userCtrl.logInUser);
// không được quên
module.exports = router;
