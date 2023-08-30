import { useGenres } from "../hooks";

const GenreList = () => {
    const { data } = useGenres();
    return (
        <ul>
            {data.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;
