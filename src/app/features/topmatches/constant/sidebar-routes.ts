export const TOPMATCHES_MENU = [
  {
    title: "Dashboard",
    link: "/topmatches/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/topmatches/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/topmatches/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/topmatches/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/topmatches/subscribers/active" },
      { title: "Inactive", link: "/topmatches/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/topmatches/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

