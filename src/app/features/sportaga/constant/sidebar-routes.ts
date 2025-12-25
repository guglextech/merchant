export const SPORTAGA_MENU = [
  {
    title: "Dashboard",
    link: "/sportaga/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/sportaga/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/sportaga/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/sportaga/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/sportaga/subscribers/active" },
      { title: "Inactive", link: "/sportaga/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/sportaga/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

