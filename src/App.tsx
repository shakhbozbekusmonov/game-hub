import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import { NavBar, GameGrid, GenreList, PlatformSelector } from "./components";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

const App = () => {
    const [seletcedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
        null
    );

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
                        selectedGenre={seletcedGenre}
                        onSelectGenre={(genre) => setSelectedGenre(genre)}
                    />
                </GridItem>
            </Show>
            <GridItem area='main'>
                <PlatformSelector
                    onSelectPlatform={(platform) =>
                        setSelectedPlatform(platform)
                    }
                    selectedPlatform={selectedPlatform}
                />
                <GameGrid
                    selectedPlatform={selectedPlatform}
                    selectedGenre={seletcedGenre}
                />
            </GridItem>
        </Grid>
    );
};

export default App;
