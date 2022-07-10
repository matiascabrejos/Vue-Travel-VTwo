import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import TheHome from "./pages/TheHome.vue";
import HomeCard from "./components/HomeCard.vue";
import HomeGrid from "./components/HomeGrid.vue";
import TheForm from "./components/TheForm.vue";
import TheCheckIn from "./pages/TheCheckIn.vue";
import TheNavbar from "./components/TheNavbar.vue";
import TheBackground from "./components/TheBackground.vue";
import TheHost from "./pages/TheHost.vue";
import AboutUs from "./pages/AboutUs.vue";
import TheFooter from "./components/TheFooter.vue";
import NotFound from "./pages/NotFound.vue";
import HomeStats from "./components/HomeStats.vue";
import CardStats from "./components/CardStats.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: TheHome },
    { path: "/checkin", component: TheCheckIn },
    { path: "/host", component: TheHost },
    { path: "/aboutus", component: AboutUs },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});

app.component("the-home", TheHome);
app.component("home-card", HomeCard);
app.component("home-grid", HomeGrid);
app.component("the-form", TheForm);
app.component("the-check-in", TheCheckIn);
app.component("the-navbar", TheNavbar);
app.component("the-background", TheBackground);
app.component("the-host", TheHost);
app.component("about-us", AboutUs);
app.component("the-footer", TheFooter);
app.component("not-found", NotFound);
app.component("home-stats", HomeStats);
app.component("card-stats", CardStats);

app.use(router);

app.mount("#app");
