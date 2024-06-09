import React from "react";
import userTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
export const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = userTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video 
    src={first.data[480]} 
    poster={first.preview} 
    controls
    />
  ) : null;
};
