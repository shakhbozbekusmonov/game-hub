import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image width='50px' src={logo} /> <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
