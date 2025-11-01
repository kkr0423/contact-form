"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "../schema/formSchema";
import { useForm } from "react-hook-form";

export type FormSchema = z.infer<typeof formSchema>;

const useContactForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      queryType: undefined,
      message: "",
      isConsented: false,
    },
  });
  return { form };
};

export default useContactForm;
