import { createRouter, createWebHistory } from "vue-router";
import BasicInfo from '../components/BasicInfo.vue';

const routes = [
  {
    path: "/",
    name: "BasicInfo",
    component: BasicInfo
  },
  {
    path: "/page2",
    name: "QuestionnaireInput",
    component: () =>
      import("../components/QuestionnaireInput.vue")
  },
  {
    path: "/page3",
    name: "ConsultationForm",
    component: () =>
      import("../components/ConsultationForm.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
