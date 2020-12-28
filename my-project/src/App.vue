<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <BasicInfo/>
  <!-- <QuestionnaireInput/> -->
  <!-- <ConsultationForm/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BasicInfo from './components/BasicInfo.vue'
// import QuestionnaireInput from './components/QuestionnaireInput.vue'
// import ConsultationForm from './components/ConsultationForm.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    BasicInfo,
    // QuestionnaireInput
    // ConsultationForm
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
