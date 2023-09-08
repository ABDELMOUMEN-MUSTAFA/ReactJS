import { z } from "zod";

export const etages = ["RDC", "1", "2", "3"];

const chambreSchema = z.object({
  type_id: z.number().int(),
  description: z
    .string()
    .min(5, "Description doit comporter 5 caractères ou plus.")
    .max(300, "Description doit comporter 300 caractères ou moins."),
  superficie: z
    .number({
      invalid_type_error: "Superficie doit être un nombre entier.",
    })
    .int()
    .positive({ message: "Superficie doit être supérieur à 0." })
    .gte(15)
    .lte(60),
  etage: z
    .string({ invalid_type_error: "Veuillez sélectionner l'étage" })
    .refine((val) => etages.includes(val), {
      message: "Entrée invalide.",
    }),
  prix: z
    .number({ invalid_type_error: "Prix doit être un nombre réel." })
    .gt(10, "Prix doit être supérieur à 10."),
});

export default chambreSchema;
