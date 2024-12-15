// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://test-user:Password12345@cluster0.925ws.mongodb.net/dissertation-management-system?retryWrites=true&w=majority&appName=Cluster0', {
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDB');
});

// Routes
import studentRoutes from './routes/students.js';
import teacherRoutes from './routes/teachers.js';

app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);


app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});