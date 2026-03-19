import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      className: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContact(
        data.name,
        data.email,
        data.phone,
        data.className,
        data.message,
      );
    },
  });
}
