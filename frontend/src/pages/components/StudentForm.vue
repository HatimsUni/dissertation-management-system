<template>
	<div class="container mt-5">
		<h2 class="mb-4">Add New Student</h2>
		<form @submit.prevent="addNewStudent" class="needs-validation" novalidate>
			<div class="mb-3">
				<label for="name" class="form-label">Student Name:</label>
				<input type="text" class="form-control" v-model="student.name" required />
				<div class="invalid-feedback">Please provide a valid name.</div>
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">Email:</label>
				<input type="email" class="form-control" v-model="student.email" required />
				<div class="invalid-afeedback">Please provide a valid email.</div>
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
			},
		};
	},
	methods: {
		...mapActions({
			createStudent: "createStudent",
		}),
		addNewStudent() {
			const newStudent = {
				name: this.student.name,
				email: this.student.email,
			};
			this.createStudent(newStudent);
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