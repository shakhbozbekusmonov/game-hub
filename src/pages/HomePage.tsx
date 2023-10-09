import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import {
    GenreList,
    GameHeading,
    PlatformSelector,
    SortSelector,
    GameGrid,
} from "../components";

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}>
            <Show above='lg'>
                <GridItem area='aside' paddingX={5}>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <Box paddingLeft={2}>
                    <GameHeading />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector />
                        </Box>
                        <SortSelector />
                    </Flex>
                </Box>
                <GameGrid />
            </GridItem>
        </Grid>
    );
};

export default HomePage;
