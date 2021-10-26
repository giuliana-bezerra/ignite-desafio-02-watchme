import { AutoSizer, List, ListRowRenderer } from 'react-virtualized';

import { MovieCard } from '../components/MovieCard';
import { Header } from './Header';

type ContentProps = {
  selectedGenre: {
    title: string;
  };
  movies: Movie[];
};

type Movie = {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
};

export function Content({ selectedGenre, movies }: ContentProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className='movies-list'>
        <MovieCard
          key={movies[index].imdbID}
          title={movies[index].Title}
          poster={movies[index].Poster}
          runtime={movies[index].Runtime}
          rating={movies[index].Ratings[0].Value}
        />
      </div>
    );
  };
  return (
    <div className='container'>
      <Header selectedGenre={selectedGenre} />
      <main>
        <div className='movies-list'>
          {/* <AutoSizer>
            {({ height, width }) => (
              <List
                height={300}
                width={500}
                rowHeight={200}
                overscanColumnCount={5}
                rowCount={movies.length}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer> */}
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
