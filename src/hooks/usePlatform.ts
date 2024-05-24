import useGenres from "./useGenres";
import usePlatforms from "./usePlatforms";
import platforms from "../data/platforms";

const usePlatform = (id?: number) => {
    const {data: platforms} = usePlatforms();
    return platforms?.results.find(g => g.id === id)
}
export default usePlatform;