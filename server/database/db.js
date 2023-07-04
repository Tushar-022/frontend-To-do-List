import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-vbrz9eq-shard-00-00.8m7uise.mongodb.net:27017,ac-vbrz9eq-shard-00-01.8m7uise.mongodb.net:27017,ac-vbrz9eq-shard-00-02.8m7uise.mongodb.net:27017/?ssl=true&replicaSet=atlas-ji3of6-shard-0&authSource=admin&retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on('connected', () => {
    console.log('Database connected Successfully');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
  });

  mongoose.connection.on('error', (error) => {
    console.log('Error while connecting with the database ', error.message);
  });
};


export default Connection;
