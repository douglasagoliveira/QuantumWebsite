# quantum-hero

```bash
pnpm install
pnpm dev
```

Hero scroll controlado pelo scroll: uma sequência de frames do vídeo de referência
(`referencia/video-1.mp4`) é scrubada num canvas via GSAP ScrollTrigger
(padão *Image Sequence Scrubbing*).

1. Frames em `public/hero/frames/frame_0001.jpg … frame_0163.jpg` (12 fps · 163 frames · ~14 MB).
   Regenerar a partir do vídeo:
   ```bash
   ffmpeg -i referencia/video-1.mp4 -vf "fps=12,scale=1280:-2" -q:v 6 public/hero/frames/frame_%04d.jpg
   ```
   (o ffmpeg começa em `frame_0001.jpg` — não há frame 0.)
2. Poster estático (sem JS / reduced-motion): `public/hero/01-poster.jpg`.
3. Textos em `content` no topo de `src/components/HeroScroll.astro`.

Linha do tempo (unidades 0–100 = 8 viewports no desktop / 5 no mobile):

| Un. | O que acontece | Frames |
|-----|----------------|--------|
| 0–6 | Plano aberto da villa ao entardecer | 1–10 |
| 6–26 | Título ALTURA se abre e sai do quadro + câmera se aproxima | 10–42 |
| 18–22 | Nav entra | 29–36 |
| 26–46 | Bloco 1 (pool deck) + contadores | 42–75 |
| 46–52 | Bloco 1 sai | 75–84 |
| 54–68 | Bloco 2 (pavilion / vidro) | 88–111 |
| 68–74 | Bloco 2 sai | 111–120 |
| 76–86 | Bloco 3 (after dark) | 123–139 |
| 86–100 | Cards de vidro; plano noturno final | 139–163 |

Enquanto os frames carregam, um indicador no rodapé mostra o %. O canvas entra por
transição de opacidade quando o primeiro frame é pintado (o poster fica por baixo).
