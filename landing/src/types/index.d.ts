export type SiteConfig = {
  title: string;
  description: string;
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type NavigationConfig = {
  items: NavItem[];
};
