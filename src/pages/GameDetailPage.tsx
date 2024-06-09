import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import { GameAttributes } from "../components/GameAttributes";
import { GameTrailer } from "../components/GameTrailer";
import GameScreenShot from "../components/GameScreenShot";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return "Loading...";
  if (error || !game) throw error;
  return (
    <>
      <Heading as="h1" size="xl">
        {game.name}
        </Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShot gameId={game.id} />
    </>
  );
}

export default GameDetailPage;
