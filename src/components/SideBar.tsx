import { Button } from './Button';

type SidebarProps = {
  genres: Genre[];
  selectedGenreId: number;
  handleSelectGender: (id: number) => void;
};

type Genre = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
};

export function SideBar({
  genres,
  selectedGenreId,
  handleSelectGender,
}: SidebarProps) {
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleSelectGender(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
