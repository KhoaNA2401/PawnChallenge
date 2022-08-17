export interface Cell{
  id: string;
  position: Position;
  hasChess: boolean;
  chess: Chess;
}

export interface Chess{
  id: string;
  name: string;
  img: string;
  icon: string;
}

export interface Position{
  x: number;
  y: number;
}
