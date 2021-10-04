import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AtraparPokemon from "../views/AtraparPokemon.vue";
import PokemonPorHabilidad from "../views/PokemonPorHabilidad.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/atraparPokemon",
        name: "AtraparPokemon",
        component: AtraparPokemon
    },
    {
        path: "/pokemonPorHabilidad/:habilidad",
        name: "PokemonPorHabilidad",
        component: PokemonPorHabilidad
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;