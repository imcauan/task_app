"use server";

import { api } from "@/services/api";
import { ColumnEntity } from "@/shared/column/types/column.entity";

export async function GetUserColumnsAction(user_id: string) {
  try {
    const { data } = await api.get<ColumnEntity[]>(`column/user/${user_id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
