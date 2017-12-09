const getters = {
    sidebar: state => state.app.sidebar,
    visitedViews: state => state.app.visitedViews,
    user_id: state => state.user.user_id,
    token: state => state.user.token,
    token_time: state => state.user.token_time,
    username: state => state.user.username,
    roles: state => state.user.roles,
    islogin: state => state.user.islogin,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters
};
export default getters