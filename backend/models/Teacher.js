// models/Teacher.js
import mongoose from 'mongoose';

const TeacherSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: false, unique: true },
});

export default mongoose.model('Teacher', TeacherSchema);