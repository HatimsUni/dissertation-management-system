<template>
	<div>
		<h2>Add New Student</h2>
		<form @submit.prevent="addNewStudent">
			<div>
				<label for="name">Student Name:</label>
				<input type="text" v-model="student.name" required />
			</div>
			<div>
				<label for="email">Email:</label>
				<input type="email" v-model="student.email" required />
			</div>
			<div>
				<label for="teacher">Assign Teacher:</label>
				<input type="text" v-model="student.teacher" required />
			</div>
			<button type="submit">Add Student</button>
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
		}
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
			console.log('about')
			this.addStudent(newStudent);
			this.resetForm()
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
form {
	display: flex;
	flex-direction: column;
}

label {
	margin: 5px 0;
}

input {
	margin-bottom: 10px;
}
</style>