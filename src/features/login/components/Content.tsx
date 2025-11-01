import { CardContent } from "@/components/ui/card";
import React from "react";
import { LoginInput } from "./LoginInput";
import { LoginTextarea } from "./LoginTextarea";
import { LoginCheckbox } from "./LoginCheckbox";
import { LoginRadioGroup } from "./LoginRadioGroup";

export const Content = () => {
  return (
    <CardContent className="flex flex-col justify-center items-center gap-6 py-3">
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <LoginInput name="firstName" label="First Name" />
        <LoginInput name="lastName" label="Last Name" />
      </div>
      <div className="w-full">
        <LoginInput name="emailAddress" label="Email Address" type="email" />
      </div>
      <div className="w-full">
        <LoginRadioGroup
          name="queryType"
          radioGroupLabels={[
            "Query Type",
            "General Enquiry",
            "Support Request",
          ]}
          radioGroupValues={["generalEnquiry", "supportRequest"]}
        />
      </div>
      <div className="w-full">
        <LoginTextarea name="message" label="Message" />
      </div>
      <div className="w-full">
        <LoginCheckbox
          name="isConsented"
          label="I consent to being contacted by the team"
        />
      </div>
    </CardContent>
  );
};
