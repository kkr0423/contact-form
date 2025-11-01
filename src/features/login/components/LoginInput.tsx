import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface LoginInputProps {
  name: string;
  label: string;
  type?: string;
}

export const LoginInput = ({ name, label, type = "text" }: LoginInputProps) => {
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
            <Input className="hover: cursor-pointer" {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
