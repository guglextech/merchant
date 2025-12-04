export const BIG_MONEY_MENU = [
  {
    title: "Dashboard",
    link: "/sports-lord/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/sports-lord/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
   {
    title: "Payments",
    link: "/sports-lord/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/sports-lord/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/sports-lord/subscribers/active" },
      { title: "Inactive", link: "/sports-lord/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/sports-lord/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
