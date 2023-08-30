import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import { NavBar, GameGrid, GenreList, PlatformSelector } from "./components";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
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
                <NavBar />
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
                <PlatformSelector
                    onSelectPlatform={(platform) =>
                        setGameQuery({ ...gameQuery, platform })
                    }
                    selectedPlatform={gameQuery.platform}
                />
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
};

export default App;
