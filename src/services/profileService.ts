import axiosInstance from "./../api/axiosInstance";

// Define el tipo Profile
export interface Profile {
  id: string;
  name: string;
  age: number;
  position: string;
}

// Obtener todos los perfiles
export const getProfiles = async (): Promise<Profile[]> => {
  const response = await axiosInstance.get("/profiles");
  return response.data;
};

// Crear un nuevo perfil
export const createProfile = async (profile: Partial<Profile>): Promise<Profile> => {
  const response = await axiosInstance.post("/profiles", profile);
  return response.data;
};

// Actualizar un perfil
export const updateProfile = async (id: string, profile: Partial<Profile>): Promise<Profile> => {
  const response = await axiosInstance.put(`/profiles/${id}`, profile);
  return response.data;
};

// Eliminar un perfil
export const deleteProfile = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/profiles/${id}`);
};
