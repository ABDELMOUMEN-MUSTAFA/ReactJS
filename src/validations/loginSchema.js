import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Veuillez saisir un email valid."),
  password: z
    .string()
    .min(8, "Votre mot de passe doit compter au moins 8 caractères."),
  remembre: z.optional(z.boolean()),
});

export default loginSchema;
