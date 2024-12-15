<template>
	<div>
		<h1>Admin Dashboard</h1>
		<StudentForm :addStudent="addStudent" />
		<StudentList :students="students" @assignTeacher="assignTeacher" />
		<a href="/teacher">Teacher</a>
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