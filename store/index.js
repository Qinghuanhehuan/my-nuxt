export const actions = {
  //该action只能出现在index里，且只能在服务端执行一次
  nuxtServerInit({ commit }, { app }) {
    //获取cookie并写入user模块
    const token = app.$cookies.get("token");
    if (token) {
      console.log("nuxtServerInit: token:" + token);
      commit("user/init", token);
    }
  }
};
