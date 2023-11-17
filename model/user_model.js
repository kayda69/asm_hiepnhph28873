const mongoose = require('mongoose');
const db = require('./db');

const userSchema = new mongoose.Schema({
    username: {
        type:String,
         required:  [true, "không được bỏ trống tên đăng nhập"],
          minLength: [6, "tên đăng nhập phải trên 6 ký tự"], 
          unique: true
        },
    password: {
        type:String,
         required:  true,
          minLength:[8, "Mật khẩu tối thiểu 8 ký tự"]
        },
    email:{
         type:String,
         required:  [true, "yêu cầu địa chỉ email" ],
         minLength: 6,
         unique: true,
         validate: {
            validator: function(v){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v); 
            },
            message: props  => `${props.value} không phải là địa chỉ emial hợp lệ`
        }
        },
        fullname:{
            type: String,
            required: true,
            minLength: 6
        },
    user_type: {
        type:String, 
        enum:["admin", "user"],
        default: "user"
    },
   
}, 
{collection: "users_tb", timestamps: true});

const User = mongoose.model('User',userSchema);

module.exports = {User, userSchema};