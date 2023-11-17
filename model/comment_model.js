const mongoose = require("mongoose")
const bookModel=  require("./book.model")

const userSchema =mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    username: String,
    fullname:String
})

const commentSchema = mongoose.Schema({
    book_id: {
        require: true,
        type: mongoose.Types.ObjectId, 
        ref: "Book",
    },
    user: {
        type: userSchema,
        required: true
    },
    content: {
        type: String,
        required: true,
        minLength: 1,
        validate: {
            validator: function(v){
                return v.trim().length >20 ; 
            },
            message: ()  => `Nội dung không được bỏ trống và lớn hơn 20 ký tự`
        }
    }

}, {collection:"comment_tb", timestamps: true})

const Comment = mongoose.model("Comment", commentSchema)

module.exports ={Comment}