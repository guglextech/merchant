export const FLASHSCORE_MENU = [
  {
    title: "Dashboard",
    link: "/flashscore/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/flashscore/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
  {
    title: "Payments",
    link: "/flashscore/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/flashscore/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/flashscore/subscribers/active" },
      { title: "Inactive", link: "/flashscore/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/flashscore/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];

