import Chart from '@/../public/icons/chart.svg';

const SIDEBAR_SECTIONS = [
  {
    items: [
      {
        href: 'dashboard',
        Icon: Chart,
        label: 'Dashboard',
      },
      {
        href: 'dashboard',
        Icon: Chart,
        label: 'Food Order',
      },
    ],
    title: 'Menu',
  },
  {
    title: 'Others',
    items: [
      { label: 'Settings', href: '#', Icon: Chart },
      { label: 'Payments', href: '#', Icon: Chart },
      { label: 'Accounts', href: '#', Icon: Chart },
      { label: 'Help', href: '#', Icon: Chart },
    ],
  },
];

export default {
  SIDEBAR_SECTIONS,
};
