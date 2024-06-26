"use client";

import { VideoCarousel } from "./video-carousel";
import useTrending from "@/hooks/useTrending";

const TrendingMovies = () => {
  const { data, isLoading, error } = useTrending("movie");
  console.log(data);

  const movies = data?.data.results;

  if (isLoading) return <div>Loading</div>;

  if (!movies) return null;

  return (
    <div>
      <VideoCarousel direction="right" movies={movies} />
    </div>
  );
};
export default TrendingMovies;
