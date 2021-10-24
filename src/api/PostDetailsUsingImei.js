import { api } from "./baseUrl";

export const PostDetailsUsingImei = async (data) => {
  const result = await api.post(
    "/jobcard/96326421051503395525054/updateIMEIMap",
    data
  );
  return result.data;
};
