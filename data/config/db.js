const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const url = 'mongodb+srv://mmraja1502:immm1502@cluster0.dgyi1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(url, {
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

// Export the connection function
module.exports = connectToDatabase;
