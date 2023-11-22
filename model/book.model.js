const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    user_id:{
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    title :{
        required: true,
        type: String,
        minLength: [3, "Độ dài tối thiểu tên truyện là 3"]
    },
    author: {
        type: String,
        required: true,
      },
      publishedYear: {
        type: Number,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
      description: {
        type: String,
         required: true
      },
      pictures :{
        type: [String],
      }
}, {collection : "book_tb", timestamps: true});

const Book = mongoose.model("Book", bookSchema);
 module.exports= {Book}
