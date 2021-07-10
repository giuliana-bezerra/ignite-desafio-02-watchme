type HeaderProps = {
  selectedGenre: Genre;
};

type Genre = {
  title: string;
};

export function Header({ selectedGenre }: HeaderProps) {
  return (
    <header>
      <span className='category'>
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
