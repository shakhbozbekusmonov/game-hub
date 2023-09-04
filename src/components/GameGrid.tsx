import { useState } from "react";
import { Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const [gamesToShow, setGameToShow] = useState(12);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding='10px'
                spacing={6}>
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
