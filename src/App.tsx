import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import { Box, Flex } from "@chakra-ui/react";
import {
    NavBar,
    GameGrid,
    GenreList,
    PlatformSelector,
    SortSelector,
    GameHeading,
} from "./components";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
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
                        selectedGenre={gameQuery.genre}
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genre })
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
                                    setGameQuery({ ...gameQuery, platform })
                                }
                                selectedPlatform={gameQuery.platform}
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
