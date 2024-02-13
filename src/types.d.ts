export interface IServiceElement {
  picture: string;
  title: string;
  description: string;
}

export interface ITechnologyCard {
  picture: string;
  title: string;
  content: string[];
}

export interface IButton {
  value: string;
  color: "black" | "blue";
  size?: "default" | "small";
}
