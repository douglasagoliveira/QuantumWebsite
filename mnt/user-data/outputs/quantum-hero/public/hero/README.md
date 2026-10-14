# Imagens da Hero (você precisa fornecer)

| Arquivo            | Conteúdo                                                                 |
|--------------------|--------------------------------------------------------------------------|
| 01-tower.jpg       | Cena aberta: cidade ao entardecer, torre à direita, janela da cobertura  |
| 02-terrace.jpg     | A MESMA cena já aproximada: cobertura + piscina à direita, cidade à esq. |
| 03-living.jpg      | Interior (sala, lareira, oliveiras) preenchendo o quadro                  |
| card-living.jpg, card-terrace.jpg, card-master.jpg | Miniaturas dos 3 cards (640×420) |

- 16:9, mínimo 2560×1440 (as camadas chegam a 3,4× de zoom). Prefira AVIF/WebP em produção.
- Continuidade: o enquadramento do início de 02 deve coincidir com 01 em ~3,4× (ajuste
  `--ox-1/--oy-1` e o `scale` final da camada 1 em HeroScroll.astro).
- 02 -> 03: o início de 03 deve coincidir com 02 em ~2,7×.
