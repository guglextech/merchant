export const ODDS_ORACLE_MENU = [
  {
    title: "Dashboard",
    link: "/odds-oracle/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/odds-oracle/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/odds-oracle/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/odds-oracle/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/odds-oracle/subscribers/active" },
      { title: "Inactive", link: "/odds-oracle/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/odds-oracle/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

