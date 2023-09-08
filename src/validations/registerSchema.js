import { z } from "zod";

const registerSchema = z
  .object({
    email: z.string().email("Veuillez saisir un email valid."),
    name: z.string().min(5, "Votre Nom doit compter au moins 8 caractères."),
    password: z
      .string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères")
      .regex(
        /[a-z]/,
        "Le mot de passe doit contenir au moins une lettre minuscule"
      )
      .regex(
        /[A-Z]/,
        "Le mot de passe doit contenir au moins une lettre majuscule"
      )
      .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
      .regex(
        /[^a-zA-Z0-9]/,
        "Le mot de passe doit contenir au moins un symbole"
      ),
    password_confirmation: z
      .string()
      .min(8, "Votre mot de passe doit compter au moins 8 caractères."),
  })
  .refine(
    ({ password, password_confirmation }) => password === password_confirmation,
    {
      message: "Les mots de passe ne correspondent pas",
      path: ["password"],
    }
  );

export default registerSchema;
