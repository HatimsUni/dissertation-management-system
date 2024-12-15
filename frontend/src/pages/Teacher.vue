<template>
	<div class="container mt-5">
		<h1 class="text-center mb-4">Teacher Dashboard</h1>
		<div class="card">
			<div class="card-body">
				<StudentList :students="assignedStudents" @submitGrades="submitGrades" />
			</div>
		</div>
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