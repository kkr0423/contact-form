import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().nonempty({
    message: "This field is required",
  }),
  lastName: z.string().nonempty({
    message: "This field is required",
  }),
  emailAddress: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  queryType: z.enum(["generalEnquiry", "supportRequest"], {
    required_error: "Please select a query type",
  }),
  message: z.string().nonempty({
    message: "This field is required",
  }),
  isConsented: z
    .boolean()
    .refine(
      (val) => val === true,
      "To submit this form, please consent to being contacted"
    ),
});
