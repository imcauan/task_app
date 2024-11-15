"use server";
import { api } from "@/services/api";
import { UpdateUserRequest } from "@/shared/user/types/update-user-request.interface";

export async function UpdateUserAction(data: UpdateUserRequest) {
  try {
    const { data: user } = await api.patch(`users/${data.id}`, data);
    return user;
  } catch (error) {
    console.log(error);
  }
}
