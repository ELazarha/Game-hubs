import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms, {Platform} from "../hooks/usePlatforms";

export interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatId?: number;
}

const PlatformSelector = ({
                              onSelectPlatform,
                              selectedPlatId
                          }: Props) => {
    const {data, error} = usePlatforms();
    const selectedPlatform = data?.results.find(p => p.id === selectedPlatId)

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatId?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)}
                                                         key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
