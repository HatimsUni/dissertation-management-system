<template>
	<div class="container mt-5">
		<h1 class="text-center mb-4">Admin Dashboard</h1>
		<div class="row">
			<div class="col-md-6">
				<StudentForm />
			</div>
			<div class="col-md-6">
				<TeacherForm />
			</div>
		</div>
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
import TeacherForm from './components/TeacherForm.vue';

export default {
	components: { StudentForm, StudentList, TeacherForm },
	async fetch() {
		await this.fetchStudents;
		console.log(this.getStudents)
	},
	computed: {
		...mapGetters({ getStudents: 'allStudents' }),
		students() {
			return this.getStudents;
		},
	},
	methods: {
		...mapActions({
			addStudent: 'addStudent',
			fetchStudents: 'fetchStudents',
			assignTeacher: 'assignTeacher'
		}),
	},
};
</script>

<style scoped>
/* Optional: Additional custom styles can go here */
</style>