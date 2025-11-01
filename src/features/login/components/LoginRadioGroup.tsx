import { Card } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import { useFormContext } from "react-hook-form";

interface LoginRadioGroupProps {
  name: string;
  radioGroupLabels: string[];
  radioGroupValues: string[];
}

export const LoginRadioGroup = ({
  name,
  radioGroupLabels,
  radioGroupValues,
}: LoginRadioGroupProps) => {
  const [groupLabel, leftOptionLabel, rightOptionLabel] = radioGroupLabels;
  const [leftOptionValue, rightOptionValue] = radioGroupValues;
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-3">
          <FormLabel className="text-xs after:content-['*'] after:text-after-content">
            {groupLabel}
          </FormLabel>
          <FormControl className="w-full">
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col md:flex-row gap-2"
            >
              <FormItem className="group w-full">
                <Card className="group-hover:cursor-pointer h-2 flex flex-row gap-4 items-center pl-4 rounded-md shadow-xs border-input has-[[data-state=checked]]:bg-[hsl(148,38%,91%)] has-[[data-state=checked]]:border-[hsl(169,82%,27%)]">
                  <FormControl className="group-hover:cursor-pointer text-[16px]">
                    <RadioGroupItem value={leftOptionValue} />
                  </FormControl>
                  <FormLabel className="group-hover:cursor-pointer">
                    {leftOptionLabel}
                  </FormLabel>
                </Card>
              </FormItem>
              <FormItem className="group w-full">
                <Card className="group-hover:cursor-pointer h-2 flex flex-row gap-4 items-center pl-4 rounded-md shadow-xs border-input has-[[data-state=checked]]:bg-[hsl(148,38%,91%)] has-[[data-state=checked]]:border-[hsl(169,82%,27%)]">
                  <FormControl className="group-hover:cursor-pointer text-[16px]">
                    <RadioGroupItem value={rightOptionValue} />
                  </FormControl>
                  <FormLabel className="group-hover:cursor-pointer">
                    {rightOptionLabel}
                  </FormLabel>
                </Card>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
