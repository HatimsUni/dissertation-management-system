<template>
	<div class="container mt-4">
		<h2 class="text-center mb-4">Student List</h2>
		<table class="table table-striped">
			<thead class="thead-dark">
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Assigned Teachers</th>
					<th v-if="isTeacher">Grades</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="student in students" :key="student._id">
					<td>{{ student.name }}</td>
					<td>{{ student.email }}</td>
					<td>
						<select v-model="student.teacherIds" multiple class="form-control"
							@change="assignTeachersToStudent(student)">
							<option v-for="teacher in teachers" :key="teacher._id" :value="teacher._id">
								{{ teacher.name }}
							</option>
						</select>
					</td>
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
import { mapGetters, mapActions } from 'vuex';

export default {
	async fetch() {
		console.log('Hello')
		await this.fetchStudents();
		this.students = this.allStudents
		console.log(this.students)
		await this.fetchTeachers();
		this.teachers = this.allTeachers
	},
	props: {
		isTeacher: {
			type: Boolean,
			default: false,
		},
	},
	data: () => ({
		students: [],
		teachers: []
	}),
	computed: {
		...mapGetters(['allStudents', 'allTeachers']),
	},
	methods: {
		...mapActions({
			assignTeachers: 'assignTeachers',
			fetchTeachers: 'fetchTeachers',
			fetchStudents: 'fetchStudents',
		}),
		submitGrades(student) {
			// Logic to handle grade submission
			student.status = 'Graded'; // Update status on submission
		},
		assignTeachersToStudent(student) {
			// Call the action to update the student's assigned teachers in the store
			this.assignTeachers({ studentId: student._id, teacherIds: student.teacherIds });
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