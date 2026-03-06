import { useQuery } from "@tanstack/react-query";
import type { ContactSubmission } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<ContactSubmission[]>({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
