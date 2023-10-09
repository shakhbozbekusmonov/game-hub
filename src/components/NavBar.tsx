import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <HStack padding='10px'>
            <Image width='50px' onClick={() => navigate("/")} src={logo} />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
