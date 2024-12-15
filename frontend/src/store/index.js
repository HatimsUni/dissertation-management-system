import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: [],
    teachers: [],
  },
  mutations: {
    ADD_STUDENT(state, student) {
      state.students.push(student);
    },
    ASSIGN_TEACHER(state, { studentId, teacher }) {
      const student = state.students.find(s => s.id === studentId);
      if (student) {
        student.teacher = teacher;
      }
    },
    // Add more mutations as needed
  },
  actions: {
    addStudent({ commit }, student) {
      commit('ADD_STUDENT', student);
    },
    assignTeacher({ commit }, payload) {
      commit('ASSIGN_TEACHER', payload);
    },
  },
  getters: {
    getStudents: state => state.students,
    // Add more getters as needed
  },
});