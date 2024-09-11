
export type NavItem = {
  title: string
  to: string
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
];

export const hiddenRoutes = ["/test-vocation/step"];