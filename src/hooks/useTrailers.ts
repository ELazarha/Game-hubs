import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailers";
import APIClient from "../services/api-client";

const userTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey : ['trailers', gameId],
    queryFn: apiClient.getAll
  });
};

export default userTrailers;