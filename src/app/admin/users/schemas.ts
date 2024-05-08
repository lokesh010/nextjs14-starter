import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const createUserSchema = z.object({
  fullName: z.string().min(1, { message: "Required" }),
});

const updateUserSchema = z.object({
  fullName: z.string().min(1, { message: "Required" }),
});

export const createUserResolver = zodResolver(createUserSchema);
export const updateUserResolver = zodResolver(updateUserSchema);
