<template>
	<div class="container mt-5">
		<h2 class="text-center mb-4">Add New Student</h2>
		<form @submit.prevent="addNewStudent" class="needs-validation" novalidate>
			<div class="mb-3">
				<label for="name" class="form-label">Student Name:</label>
				<input type="text" class="form-control" v-model="student.name" required />
				<div class="invalid-feedback">Please provide a valid name.</div>
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">Email:</label>
				<input type="email" class="form-control" v-model="student.email" required />
				<div class="invalid-feedback">Please provide a valid email.</div>
			</div>
			<div class="mb-3">
				<label for="teacher" class="form-label">Assign Teacher:</label>
				<input type="text" class="form-control" v-model="student.teacher" required />
				<div class="invalid-feedback">Please assign a teacher.</div>
			</div>
			<button type="submit" class="btn btn-primary">Add Student</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			student: {
				name: '',
				email: '',
				teacher: '',
			},
		};
	},
	props: {
		addStudent: {
			type: Function,
		},
	},
	methods: {
		addNewStudent() {
			const newStudent = {
				id: Date.now(), // Unique ID for the student
				name: this.student.name,
				email: this.student.email,
				teacher: this.student.teacher,
				grades: {}, // Initialize grades as an empty object
				status: 'Pending',
			};
			this.addStudent(newStudent);
			this.resetForm();
		},
		resetForm() {
			this.student.name = '';
			this.student.email = '';
			this.student.teacher = '';
		},
	},
};
</script>

<style scoped>
/* Optional: Additional custom styles */
</style>