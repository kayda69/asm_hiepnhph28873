// cài thư viện: npm install mongoose --save 
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/book_manager')
        .catch((err)=>{
            console.log("Loi ket noi csdl");
            console.log(err);
        });
module.exports = {mongoose};