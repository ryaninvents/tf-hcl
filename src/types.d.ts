export interface Node {
  type: string;
  position?: Location;
}

export interface Location {
  start: Position;
  end: Position;
  indent?: number;
}

export interface Position {
  line: number;
  column: number;
  offset?: number;
}

export interface Parent extends Node {
  children: Node[];
}

export interface Text extends Node {
  value: string;
}
