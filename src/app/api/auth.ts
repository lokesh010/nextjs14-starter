import { ILogin } from "@/login/Form/types";
import fetchClient from "@/shared/lib/FetchInstance";

export const loginReq = (data: ILogin) =>
  fetchClient("/login", { method: "POST", body: JSON.stringify(data) });
