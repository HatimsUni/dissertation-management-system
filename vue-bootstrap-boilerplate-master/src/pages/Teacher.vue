<template>
	<div>
		<h1>Teacher Dashboard</h1>
		<StudentList :students="assignedStudents" @submitGrades="submitGrades" />
	</div>
</template>

<script>
import StudentList from './components/StudentList.vue';
import { mapGetters } from 'vuex';

export default {
	components: { StudentList },
	computed: {
		...mapGetters(['getStudents']),
		assignedStudents() {
			return this.getStudents.filter(s => s.teacher === this.$route.params.teacherId);
		},
	},
	methods: {
		submitGrades(grades) {
			// Handle grade submission logic
		},
	},
};
</script>