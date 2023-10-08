import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import {
    GameGrid,
    GameHeading,
    GenreList,
    NavBar,
    PlatformSelector,
    SortSelector,
} from "./components";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
}

const App = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>
            <Show above='lg'>
                <GridItem area='aside' paddingX={5}>
                    <GenreList
                        selectedGenreId={gameQuery.genreId}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genreId: genre.id })
                        }
                    />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery} />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector
                                onSelectPlatform={(platform) =>
                                    setGameQuery({
                                        ...gameQuery,
                                        platformId: platform.id,
                                    })
                                }
                                selectedPlatformId={gameQuery.platformId}
                            />
                        </Box>
                        <SortSelector
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                            sortOrder={gameQuery.sortOrder}
                        />
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
};

export default App;
