export const KING_SOLOMON_MENU = [
  {
    title: "Dashboard",
    link: "/king-solomon/dashboard",
    icon: "/assets/icons/feather/home.svg",
  },
  {
    title: "Forecast",
    link: "/king-solomon/forecast",
    icon: "/assets/icons/feather/file-text.svg",
  },
   {
    title: "Payments",
    link: "/king-solomon/payments",
    icon: "/assets/icons/feather/credit-card.svg",
  },
  {
    title: "Subscribers",
    link: "/king-solomon/subscribers/active",
    icon: "/assets/icons/feather/users.svg",
    collapse: true,
    collapseId: "ui-subscriber",
    subMenu: [
      { title: "Active", link: "/king-solomon/subscribers/active" },
      { title: "Inactive", link: "/king-solomon/subscribers/inactive" },
    ],
  },
  {
    title: "Price Config",
    link: "/king-solomon/price-setup",
    icon: "/assets/icons/feather/dollar-sign.svg",
  }
];
