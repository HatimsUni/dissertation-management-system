// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import { getStudents, addStudent, assignTeachersToStudent, submitGrades } from '../api/studentApi';
import { getTeachers, addTeacher } from '../api/teacherApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
    teachers: [],
  },
  mutations: {
    SET_STUDENTS(state, students) {
      state.students = students;
    },
    ADD_STUDENT(state, student) {
      state.students.push(student);
    },
    SET_TEACHERS(state, teachers) {
      state.teachers = teachers;
    },
    ADD_TEACHER(state, teacher) {
      state.teachers.push(teacher);
    },
  },
  actions: {
    async fetchStudents({ commit }) {
      const students = await getStudents();
      commit('SET_STUDENTS', students);
    },
    async createStudent({ commit }, student) {
      const newStudent = await addStudent(student);
      console.log("Hello")
      commit('ADD_STUDENT', newStudent);
    },
    async assignTeachers({ commit }, { studentId, teacherIds }) {
      const updatedStudent = await assignTeachersToStudent(studentId, teacherIds);
      commit('SET_STUDENTS', this.state.students.map(student => student._id === studentId ? updatedStudent : student));
    },
    async submitStudentGrades({ commit }, { studentId, grades }) {
      const updatedStudent = await submitGrades(studentId, grades);
      commit('SET_STUDENTS', this.state.students.map(student => student._id === studentId ? updatedStudent : student));
    },
    async fetchTeachers({ commit }) {
      const teachers = await getTeachers();
      commit('SET_TEACHERS', teachers);
    },
    async createTeacher({ commit }, teacher) {
      const newTeacher = await addTeacher(teacher);
      commit('ADD_TEACHER', newTeacher);
    },
  },
  getters: {
    allStudents: (state) => state.students,
    allTeachers: (state) => state.teachers,
  },
});