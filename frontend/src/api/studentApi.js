// src/api/studentApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';

export const getStudents = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

export const addStudent = async (student) => {
	const response = await axios.post(API_URL, student);
	console.log(response.data)
	return response.data;
};

export const assignTeachersToStudent = async (studentId, teacherIds) => {
	const response = await axios.put(`${API_URL}/${studentId}/assign`, { teacherIds });
	return response.data;
};

export const submitGrades = async (studentId, grades) => {
	const response = await axios.put(`${API_URL}/${studentId}/grades`, { grades });
	return response.data;
};