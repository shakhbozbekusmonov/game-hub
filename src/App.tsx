import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import { NavBar, GameGrid, GenreList } from "./components";

const App = () => {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}>
            <GridItem area='nav'>
                <NavBar />
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside' paddingX={5}>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <GameGrid />
            </GridItem>
        </Grid>
    );
};

export default App;
