export default {
  state: {
    currentRoute: "/dashboard/menu",
    transactionTabs: null,
    dashboardRoutes: [
      {
        icon: "las la-home",
        title: "Dashboard",
        route: "/dashboard/dashboard",
        location: window.location.pathname,
      },
      {
        icon: "las la-exchange-alt",
        title: "Transactions",
        route: "/dashboard/transactions",
        location: window.location.pathname,
      },
      {
        icon: "las la-exchange-alt",
        title: "Product",
        route: "/dashboard/product",
        location: window.location.pathname,
      },
      {
        icon: "las la-shopping-bag",
        title: "Orders",
        route: "/dashboard/orders",
        location: window.location.pathname,
      },
      {
        icon: "las la-store-alt",
        title: "Store",
        route: "/dashboard/store",
        location: window.location.pathname,
      },
      {
        icon: "las la-cash-register",
        title: "Withdraws",
        route: "/dashboard/withdraws",
        location: window.location.pathname,
      },
      {
        icon: "las la-link",
        title: "Create paddi link",
        route: "/dashboard/createpaddilink",
        location: window.location.pathname,
      },
      {
        icon: "las la-sync",
        title: "Refunds",
        route: "/dashboard/refunds",
        location: window.location.pathname,
      },
      {
        icon: "las la-question-circle",
        title: "Support",
        route: "/dashboard/support",
        location: window.location.pathname,
      },
      {
        icon: "las la-user-alt",
        title: "Account",
        route: "/dashboard/account",
        location: window.location.pathname,
      },
    ],
  },
  getters: {
    dashboardRoutes: (state) => state.dashboardRoutes,
  },
}
