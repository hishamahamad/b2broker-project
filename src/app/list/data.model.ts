export interface DataItem {
  id: string;
  int: number;
  float: number;
  color: string;
  child: ChildItem;
}

export interface ChildItem {
  id: string;
  color: string;
}
