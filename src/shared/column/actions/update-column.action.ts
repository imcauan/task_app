"use server";

import { api } from "@/services/api";
import { ColumnEntity } from "@/shared/column/types/column.entity";
import { UpdateColumnRequest } from "@/shared/column/types/update-column-request.interface";

export async function UpdateColumnAction(data: UpdateColumnRequest) {
  try {
    const { data: column } = await api.patch<ColumnEntity>(`column/user`, data);
    return column;
  } catch (error) {
    console.log(error);
  }
}
