const db = 'mongodb+srv://phamtuan:phamtuan0808@cluster0.f9cgt.mongodb.net/test' 
const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect(db,{ // Dòng Await này dùng để BẮT BUỘC JS chạy xong hàm kết nối DB rồi mới báo kết nối thành công
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        console.log('Database connected')
    } catch(error) {
         console.log(error)
    }
}

module.exports = {connect} // Dùng để xuất hàm connect ra để sử dụng ở những nơi khác ( sử dụng câu lệnh require)