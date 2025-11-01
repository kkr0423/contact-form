import React from "react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

export const Footer = () => {
  return (
    <CardFooter className="pt-6">
      <Button
        type="submit"
        className="bg-button hover:bg-button-accent w-full cursor-pointer h-11"
      >
        Submit
      </Button>
    </CardFooter>
  );
};
