import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useFormContext } from "react-hook-form";

interface LoginCheckboxProps {
  name: string;
  label: string;
}

export const LoginCheckbox = ({ name, label }: LoginCheckboxProps) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
              return (
                <FormItem className="flex flex-row items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  </FormControl>
                  <FormLabel className="text-xs after:content-['*'] after:text-after-content">
                    {label}
                  </FormLabel>
                </FormItem>
              );
            }}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
