import { toast } from "react-toastify";

export const toastSuccess = (message?: string) => {
  toast.success(message || "Success");
};

export const toastError = (message?: string) => {
  toast.error(message || "Error");
}

export const toastWarning = (message?: string) => {
  toast.warning(message || "Warning");
}