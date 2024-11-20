"use server";

import { api } from "@/services/api";
import { ColumnEntity } from "@/shared/column/types/column.entity";
import { CreateColumnRequest } from "@/shared/column/types/create-column-request.interface";

export async function CreateColumnAction(data: CreateColumnRequest) {
  try {
    const { data: column } = await api.post<ColumnEntity>("column", data);
    return column;
  } catch (error) {
    console.log(error);
  }
}
