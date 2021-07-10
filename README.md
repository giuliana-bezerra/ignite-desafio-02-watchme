<h1 align="center">
  <img alt="watchme" title="watchme" src=".github/logo.png" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
  <img src="https://img.shields.io/static/v1?label=Ignite&message=Desafio-02&color=8257E5&labelColor=000000" alt="Desafio-02" />
</p>

<br>

<img alt="watchme" src=".github/watchme.gif" width="100%">

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

O WatchMe é uma aplicação de listagem de filmes para praticar a componentização no React. Projeto submetido como o desafio 02 do ignite de ReactJS.

## 🔖 Solução
O desafio foi basicamente componentizar a aplicação React que possuía toda a sua lógica concentrada no App.
Esse desafio foi resolvido da seguinte forma:
* Content: Para criar o componente Content, todo o HTML relacionado foi extraído do App, mas existiam dados dinâmicos desse HTML necessários para a renderização do componente. Para solucionar o problema, foram criadas props para tornar o componente dinâmico e assim permitir a mudança de estado no App sendo refletida nos componentes filhos:
  ```ts
  // Definição de tipos omitida por simplicidade
  export function Content({ selectedGenre, movies }: ContentProps) {
    return (
      <div className='container'>
        <Header selectedGenre={selectedGenre} />
        <main>
            <div className='movies-list'>
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
  ```
* SideBar: Para criar o componente SideBar, todo o HTML relacionado foi extraído do App, mas existiam dados dinâmicos desse HTML necessários para a renderização do componente. Para solucionar o problema, foram criadas props para tornar o componente dinâmico e assim permitir a mudança de estado no App sendo refletida nos componentes filhos:
  ```ts
  // Definição de tipos omitida por simplicidade
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
  ```
Obs: Também foi criado o componente Header seguindo a mesma ideia.

## 🚀 Como executar

- Clone o repositório
- Instale as dependências com `yarn`
- Inicie o servidor com `yarn dev`

Agora você pode acessar [`localhost:8080`](http://localhost:8080) do seu navegador.

## 📄 Licença

Esse projeto está sob a licença MIT.

---
