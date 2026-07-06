# Livefy

Um player de música com cara de Spotify, feito em HTML, CSS e JavaScript puros. Projeto acadêmico.

## Estrutura

```
livefy/
├── index.html        # Home: playlist em destaque + grade de artistas
├── player.html        # Tela do player (now playing)
├── style.css           # Tokens de tema (claro/escuro) + estilos do player
├── home.css            # Estilos da home (grade de artistas, disco de vinil no hover)
├── data.js             # Dados de artistas/músicas + curtidas persistidas
├── theme.js             # Alternância de tema claro/escuro
├── home.js               # Lógica da home
├── script.js               # Lógica do player
├── images/artists/          # Fotos dos artistas (você adiciona)
├── songs/                     # Arquivos .mp3 (você adiciona)
├── Dockerfile
├── nginx.conf
└── docker-compose.yml
```

## Adicionando artistas e músicas

Edite o array `artists` em `data.js`. Cada artista precisa de:

- `photo`: caminho para `images/artists/<id>.webp`
- `songs`: lista de `{ songName, file, liked }`, onde `file` é o nome (sem extensão) usado tanto para `songs/<file>.mp3` quanto para `images/<file>.webp` (capa do álbum).

Hoje cada artista tem uma música de exemplo; basta baixar o áudio e a arte e apontar os arquivos com o mesmo nome.

## Rodando localmente (sem Docker)

Basta servir a pasta com qualquer servidor estático, por exemplo:

```bash
npx serve .
```

## Rodando com Docker

```bash
docker compose up --build
```

Acesse http://localhost:8080.

## Convenções seguidas

- HTML semântico (`header`, `main`, `section`, `article`, `figure`, `time`).
- `id` usado apenas como gancho para o JavaScript; toda estilização é feita via `class`.
- Container Nginx servindo os arquivos estáticos.
