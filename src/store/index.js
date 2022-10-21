import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: {},
    };
  },
  // Para transformar los datos y mostrarlos de manera diferente, sin modificar la estructura con la que etsan almacenados
  getters: {
    firstName(state) {
      return state.user;
    },
    // para pasar argmentos que modifiquen el estado
    firstName: (state) => (argumento) => {
      return state.user;
    },
  },
  // Mutations: funciones sincronas para modificar el modelo de datos dentro de vuex desde ecentos que ocurres desde los componentes de la app
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
  },
  // Posobilidad adicional de sobre las mutationns, al final ejecutan una mutacion. Aca se puede ejecutar codigo asincrono. Lugar ideal para ubicar la logica del negocio
  actions: {
    getUser({ commit }, user) {
      commit("updateUser", user);
    },
  },
});

export default store;
