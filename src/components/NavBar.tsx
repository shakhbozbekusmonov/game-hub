import { Image } from "@chakra-ui/image";
import { HStack, Text } from "@chakra-ui/layout";
import logo from "../assets/logo.webp";

const NavBar = () => {
    return (
        <HStack>
            <Image width="50px" src={logo} /> <Text>Navbar</Text>
        </HStack>
    );
};

export default NavBar;
