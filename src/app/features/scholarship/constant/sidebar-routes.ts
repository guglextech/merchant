export const SCHOLARSHIP_MENU = [
  {
    title: "Dashboard",
    link: "/scholarship/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/scholarship/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/scholarship/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/scholarship/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/scholarship/subscribers/active" },
      { title: "Inactive", link: "/scholarship/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/scholarship/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

