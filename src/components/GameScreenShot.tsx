
import useScreenshot from "../hooks/useScreenshot";
import { SimpleGrid  , Image} from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshot(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid column={{ base: 1, md: 2 }}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  )
};

export default GameScreenShot;
