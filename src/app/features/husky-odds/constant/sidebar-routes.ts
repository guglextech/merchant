export const HUSKY_ODDS_MENU = [
  {
    title: "Dashboard",
    link: "/husky-odds/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/husky-odds/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/husky-odds/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/husky-odds/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/husky-odds/subscribers/active" },
      { title: "Inactive", link: "/husky-odds/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/husky-odds/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

