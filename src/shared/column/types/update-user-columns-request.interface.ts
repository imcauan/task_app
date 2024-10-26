export interface UpdateUserColumnsRequest {
  id: string;
  columns: ColumnsToUpdate[];
}

export type ColumnsToUpdate = {
  id: string;
  order: number;
};
