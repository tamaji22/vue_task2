import { createStore } from 'vuex';
import { year } from '../definition.js';

export default createStore({
  state() {
    return {
      gender: null,
      year: year[0],
      month: 1,
      day: 1,
      insurance: null,
      medical: null,
      hospitalization: null,
      consultation: null,
    };
  },
  getters: {
    getGender: (state) => {
      return state.gender;
    },
    getYear: (state) => {
      return state.year;
    },
    getMonth: (state) => {
      return state.month;
    },
    getDay: (state) => {
      return state.day;
    },
    getInsurance: (state) => {
      return state.insurance;
    },
    getMedical: (state) => {
      return state.medical;
    },
    getHospitalization: (state) => {
      return state.hospitalization;
    },
    getConsultation: (state) => {
      return state.consultation;
    },
  },
  mutations: {
    setGender: function(state, gender) {
      state.gender = gender;
    },
    setYear: function(state, year) {
      state.year = year;
    },
    setMonth: function(state, month) {
      state.month = month;
    },
    setDay: function(state, day) {
      state.day = day;
    },
    setInsurance: function(state, insurance) {
      state.insurance = insurance;
    },
    setMedical: function(state, medical) {
      state.medical = medical;
    },
    setHospitalization: function(state, hospitalization) {
      state.hospitalization = hospitalization;
    },
    setConsultation: function(state, consultation) {
      state.consultation = consultation;
    },
  },
  actions: {},
  modules: {},
});
