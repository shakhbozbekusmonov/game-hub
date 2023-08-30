import {
    HStack,
    List,
    ListItem,
    SkeletonCircle,
    SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
    return (
        <List>
            <ListItem paddingY='5px'>
                <HStack>
                    <SkeletonCircle />
                    <SkeletonText
                        width='100px'
                        noOfLines={1}
                        skeletonHeight='5'
                    />
                </HStack>
            </ListItem>
        </List>
    );
};

export default GenreListSkeleton;
