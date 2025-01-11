import axiosInstance from "./axiosInstance";
import { Profile } from "../types/Profile";

// Función para obtener todos los perfiles
export const getProfiles = async (): Promise<Profile[]> => {
  const response = await axiosInstance.get<Profile[]>("/profiles");
  return response.data;
};

// Función para obtener un perfil por ID
export const getProfileById = async (id: string): Promise<Profile> => {
  const response = await axiosInstance.get<Profile>(`/profiles/${id}`);
  return response.data;
};
