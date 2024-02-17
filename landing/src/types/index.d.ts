export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type NavigationConfig = {
  items: NavItem[];
};
