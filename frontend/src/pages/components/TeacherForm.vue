<template>
	<div class="container mt-5">
		<h2 class="mb-4">Add New Teacher</h2>
		<form @submit.prevent="addNewTeacher" class="needs-validation" novalidate>
			<div class="mb-3">
				<label for="name" class="form-label">Teacher Name:</label>
				<input type="text" class="form-control" v-model="teacher.name" required />
				<div class="invalid-feedback">Please provide a valid name.</div>
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">Email:</label>
				<input type="email" class="form-control" v-model="teacher.email" required />
				<div class="invalid-afeedback">Please provide a valid email.</div>
			</div>
			<button type="submit" class="btn btn-primary">Add Teacher</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			teacher: {
				name: '',
				email: '',
			},
		};
	},
	props: {
		addTeacher: {
			type: Function,
		},
	},
	methods: {
		...mapActions({
			createTeacher: "createTeacher",
		}),
		addNewTeacher() {
			const newTeacher = {
				name: this.teacher.name,
				email: this.teacher.email,
			};
			this.createTeacher(newTeacher);
			this.resetForm();
		},
		resetForm() {
			this.teacher.name = '';
			this.teacher.email = '';
			this.teacher.teacher = '';
		},
	},
};
</script>

<style scoped>
/* Optional: Additional custom styles */
</style>