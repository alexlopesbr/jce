import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SobreDepressao from '../components/SobreDepressao.vue';
import SobreHipnose from '../components/SobreHipnose.vue';
import SobreMitos from '../components/SobreMitos.vue';
import SobreHipnoterapia from '../components/SobreHipnoterapia.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import(/* webpackChunkName: "sobre" */ '../views/Sobre.vue'),
    children: [
      { path: 'depressao', component: SobreDepressao },
      { path: 'hipnose', component: SobreHipnose },
      { path: 'mitos', component: SobreMitos },
      { path: 'hipnoterapia', component: SobreHipnoterapia },
    ],
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('../views/Contato.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
