import { useRef } from "react";
import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const { data, error, isLoading } = useTrailers(gameId);

    if (isLoading) return null;

    if (error) throw error;

    const first = data?.results[0];

    return first ? (
        <video
            ref={videoRef}
            src={first?.data[480]}
            playsInline
            loop
            muted
            poster={first?.preview}
            onMouseOver={() => videoRef.current?.play()}
            onMouseOut={() => {
                videoRef.current?.pause();
            }}
        />
    ) : null;
};

export default GameTrailer;
