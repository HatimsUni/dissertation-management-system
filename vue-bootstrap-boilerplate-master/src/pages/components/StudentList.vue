<template>
	<div>
		<h2>Student List</h2>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Assigned Teacher</th>
					<th>Status</th>
					<th v-if="isTeacher">Grades</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="student in students" :key="student.id">
					<td>{{ student.name }}</td>
					<td>{{ student.email }}</td>
					<td>{{ student.teacher }}</td>
					<td>{{ student.status }}</td>
					<td v-if="isTeacher">
						<input type="text" v-model="student.grades[teacherId]" placeholder="Enter Grade" />
						<button @click="submitGrades(student)">Submit</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	props: {
		isTeacher: {
			type: Boolean,
			default: false,
		},
		teacherId: {
			type: String,
			default: '',
		},
	},
	computed: {
		...mapGetters(['getStudents']),
		students() {
			return this.getStudents;
		},
	},
	methods: {
		submitGrades(student) {
			// Logic to handle grade submission
			// Here you could dispatch an action to update the student's grades in the store
			student.status = 'Graded'; // Update status on submission
		},
	},
};
</script>

<style scoped>
table {
	width: 100%;
	border-collapse: collapse;
}

th,
td {
	padding: 10px;
	border: 1px solid #ccc;
}

th {
	background-color: #f4f4f4;
}
</style>