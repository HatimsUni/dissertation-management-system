// routes/teachers.js
import express from 'express';
import Teacher from '../models/Teacher.js';

const router = express.Router();

// Add a new teacher
router.post('/', async (req, res) => {
	const newTeacher = new Teacher(req.body);
	try {
		const savedTeacher = await newTeacher.save();
		res.status(201).json(savedTeacher);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Get all teachers
router.get('/', async (req, res) => {
	try {
		const teachers = await Teacher.find();
		res.status(200).json(teachers);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;