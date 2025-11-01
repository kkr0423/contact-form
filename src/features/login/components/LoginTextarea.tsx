import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useFormContext } from "react-hook-form";

interface LoginTextareaProps {
  name: string;
  label: string;
}

export const LoginTextarea = ({ name, label }: LoginTextareaProps) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-3 w-full">
          <FormLabel className="text-xs after:content-['*'] after:text-after-content">
            {label}
          </FormLabel>
          <FormControl>
            <Textarea className="hover: cursor-pointer" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
