import { toast } from "react-toastify";

/** Notifications Component */
export const Notifications = ({
  type,
  content,
}: {
  type: string;
  content: string;
}) => {
  if (type === "error") toast.error(content);
  else if (type === "success") toast.success(content);
  else toast(content);
};
