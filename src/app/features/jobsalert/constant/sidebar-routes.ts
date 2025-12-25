export const JOBSALERT_MENU = [
  {
    title: "Dashboard",
    link: "/jobsalert/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/jobsalert/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/jobsalert/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/jobsalert/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/jobsalert/subscribers/active" },
      { title: "Inactive", link: "/jobsalert/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/jobsalert/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

