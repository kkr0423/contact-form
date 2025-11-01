import React from "react";
import { Toaster } from "react-hot-toast";

export const SubmitToaster = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "oklch(0.3625 0.0299 206.33)",
          color: "white",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        success: {
          iconTheme: {
            primary: "oklch(0.3625 0.0299 206.33)",
            secondary: "black",
          },
        },
      }}
    />
  );
};
