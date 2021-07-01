import { createStore } from "vuex";
import users from './users/index'
export default createStore({
  modules: {
    users
  },
});
