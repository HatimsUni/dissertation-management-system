// routes/students.js
import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

// Add a new student
router.post('/', async (req, res) => {
	const newStudent = new Student(req.body);
	try {
		const savedStudent = await newStudent.save();
		res.status(201).json(savedStudent);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Get all students
router.get('/', async (req, res) => {
	try {
		const students = await Student.find();
		res.status(200).json(students);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Assign teacher to a student
router.put('/:id/assign', async (req, res) => {
	try {
		const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { teacher: req.body.teacher }, { new: true });
		res.status(200).json(updatedStudent);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Submit grades for a student
router.put('/:id/grades', async (req, res) => {
	try {
		const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { grades: req.body.grades, status: 'Graded' }, { new: true });
		res.status(200).json(updatedStudent);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;