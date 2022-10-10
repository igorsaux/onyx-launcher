export type Meta = {
  games: Game[];
};

export type Server = {
  name: string;
  address: string;
};

export type Game = {
  id: string;
  title: string;
  icon: string;
  background: string;
  description: string;
  servers: Server[];
  serverType: "Byond" | "SS14";
  links: {
    [name: string]: string;
  };
};
