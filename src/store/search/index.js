
export default {
  state: {
    dummyData: [],
  },
  getters: {
    getDummyData: (state) => state.dummyData,
  },
  actions: {
    async getDummyData({ commit }, payload) {
      try {
        let url = `${process.env.VUE_APP_API_KEY}/posts?_page=${payload.page}&_limit=${payload.limit}`;
        if (payload.search) {
          url = `${process.env.VUE_APP_API_KEY}/posts?q=${payload.search}`;
        }
        const response = await fetch(url, { method: "GET" });
        const totalPosts = response.headers.get("X-Total-Count");
        const data = await response.json();
        commit("setDummyData", data);
        return totalPosts;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    setDummyData(state, payload) {
      state.dummyData = payload;
    },
  },
};
