import { Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Platform } from "../hooks/useGames";
import { useState } from "react";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data, error, isLoading } = useGames(
        selectedGenre,
        selectedPlatform
    );
    const [gamesToShow, setGameToShow] = useState(12);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
                padding='10px'
                spacing={3}>
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data.slice(0, gamesToShow).map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
            {data.length > gamesToShow && (
                <Flex justifyContent='center'>
                    <Button
                        colorScheme='teal'
                        variant='outline'
                        mx='auto'
                        onClick={() => setGameToShow(gamesToShow + 4)}>
                        See More
                    </Button>
                </Flex>
            )}
        </>
    );
};

export default GameGrid;
