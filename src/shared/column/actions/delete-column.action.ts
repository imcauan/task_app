"use server";

import { api } from "@/services/api";
import { ColumnEntity } from "@/shared/column/types/column.entity";

export async function DeleteColumnAction(id: string) {
  try {
    const { data } = await api.delete<ColumnEntity>(`column/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
