export const BUSINESSKEY_MENU = [
  {
    title: "Dashboard",
    link: "/businesskey/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/businesskey/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/businesskey/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/businesskey/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/businesskey/subscribers/active" },
      { title: "Inactive", link: "/businesskey/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/businesskey/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

