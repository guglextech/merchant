export const HEARTWISE_MENU = [
  {
    title: "Dashboard",
    link: "/heartwise/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/heartwise/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/heartwise/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/heartwise/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/heartwise/subscribers/active" },
      { title: "Inactive", link: "/heartwise/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/heartwise/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

