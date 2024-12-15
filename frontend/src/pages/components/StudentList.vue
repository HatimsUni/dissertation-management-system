<template>
	<div class="container mt-4">
		<h2 class="text-center mb-4">Student List</h2>
		<table class="table table-striped">
			<thead class="thead-dark">
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
						<div class="input-group">
							<input type="text" class="form-control" v-model="student.grades[teacherId]"
								placeholder="Enter Grade" />
							<div class="input-group-append">
								<button class="btn btn-primary" @click="submitGrades(student)">Submit</button>
							</div>
						</div>
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
			student.status = 'Graded'; // Update status on submission
		},
	},
};
</script>

<style scoped>
.table {
	margin-top: 20px;
}

.input-group {
	width: 300px;
	/* Adjust width as necessary */
}

.input-group-append .btn {
	margin-left: 5px;
	/* Space between input and button */
}
</style>