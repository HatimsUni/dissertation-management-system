<template>
	<div class="container mt-5">
		<h1 class="text-center mb-4">Admin Dashboard</h1>
		<StudentForm :addStudent="addStudent" />
		<div class="mt-4">
			<StudentList :students="students" @assignTeacher="assignTeacher" />
		</div>
		<div class="text-center mt-4">
			<a href="/teacher" class="btn btn-secondary">Go to Teacher Dashboard</a>
		</div>
	</div>
</template>

<script>
import StudentForm from './components/StudentForm.vue';
import StudentList from './components/StudentList.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
	components: { StudentForm, StudentList },
	computed: {
		...mapGetters(['getStudents']),
		students() {
			return this.getStudents;
		},
	},
	methods: {
		...mapActions({ addStudent: 'addStudent', assignTeacher: 'assignTeacher' }),
	},
};
</script>

<style scoped>
/* Optional: Additional custom styles can go here */
</style>