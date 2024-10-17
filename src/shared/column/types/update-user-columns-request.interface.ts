import { ColumnEntity } from "./column.entity";

export interface UpdateUserColumnsRequest {
  id: string;
  columns: ColumnEntity[];
}
