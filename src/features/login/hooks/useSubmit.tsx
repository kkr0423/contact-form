import { SuccessCheckIcon } from "../components/SuccessCheckIcon";
import toast from "react-hot-toast";

export const useSubmit = () => {
  const onSubmit = () => {
    toast(
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <SuccessCheckIcon />
          <div className="flex flex-col">
            <p className="font-semibold">Message Sent!</p>
          </div>
        </div>
        <p className="text-xs">
          Thanks for completing the form. We will be in touch soon!
        </p>
      </div>,
      {
        icon: null,
      }
    );
  };
  return { onSubmit };
};
