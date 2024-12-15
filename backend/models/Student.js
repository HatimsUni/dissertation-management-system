// models/Student.js
import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	teacherIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }], // Array of teacher IDs
	grades: { type: Object, default: {} },
	status: { type: String, default: 'Pending' },
	reports: {
		progress: { type: String, default: '' },
		final: { type: String, default: '' },
	},
});

export default mongoose.model('Student', StudentSchema);