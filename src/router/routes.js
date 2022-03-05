export default [
  {
    path: "/",
    name: "Admin",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue"),
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: () => import("../views/Transactions.vue"),
  },
]
