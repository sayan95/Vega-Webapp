export interface Heading {
  brandName: string;
  navItems: HeadingNavItem[];
  showBigBanner: boolean;
  bigBanner: HeadingBigBanner;
}

export interface HeadingBigBanner {
  primaryText: string;
  secondaryTextLine: string;
}

export interface ApplicationTemplateData {
  heading: Heading;
}

export interface HeadingNavItem {
  navText: string;
  navLink: string;
}
