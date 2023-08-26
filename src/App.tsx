import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}>
            <GridItem area='nav' bg=''>
                <NavBar />
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside' bg='gold'>
                    Aside
                </GridItem>
            </Show>
            <GridItem area='main' bg='dodgerblue'>
                Main
            </GridItem>
        </Grid>
    );
};

export default App;
