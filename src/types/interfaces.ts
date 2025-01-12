export interface navProps {
  menuItems: string[];
}

export interface TitleComponentProps {
  titleContent: string;
  titleClass?: string;
  description?: string;
  descriptionClass?: string;
  label?: string;
  labelClass?: string;
}

export interface aboutSectionProps {
  title: string;
  description: string;
}

export interface FooterGridColumnProps {
  title: string;
  gridItems: string[];
}
