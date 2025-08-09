const { default: mongoose } = require("mongoose");


const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://tisapatel1204:12345@cluster0.iqhac3d.mongodb.net/BookStore');
        console.log('Connected to the database successfully');
    } catch (error) {
        console.log('Error connecting to the database:', error);
        
    }
}

module.exports = db;