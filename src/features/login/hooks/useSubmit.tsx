import { SuccessCheckIcon } from "../components/SuccessCheckIcon";
import { FormSchema } from "./useContactForm";
import toast from "react-hot-toast";

export const useSubmit = () => {
  const onSubmit = (values: FormSchema) => {
    toast(
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <SuccessCheckIcon />
          <div className="flex flex-col">
            <p className="font-semibold">Message Sent!</p>
          </div>
        </div>
        <p className="text-xs">
          Thanks for completing the form. We'll be in touch soon!
        </p>
      </div>,
      {
        icon: null,
      }
    );
  };
  return { onSubmit };
};
