# Michele Núbia — Terapeuta TRG & Psicanálise

Site institucional e de conversão para **Michele Núbia**, terapeuta emocional
formada em Terapia de Reprocessamento Generativo (TRG) e em formação em
Psicanálise Contemporânea. Atendimento online para todo o Brasil.

## ✨ Destaques

- **Design profissional** focado em conversão (jornada dor → solução → prova → ação).
- **CTAs de WhatsApp** com mensagem pré-preenchida em cada etapa da página.
- **SEO completo**: meta tags, Open Graph/Twitter, dados estruturados JSON-LD
  (`ProfessionalService`, `Person`, `FAQPage`), `sitemap.xml` e `robots.txt`.
- **Performance**: fontes com `display=swap`, `preconnect`/`preload` da imagem principal,
  CSS/JS separados e imagens com `loading="lazy"`.
- **Acessibilidade**: navegação por teclado, `aria-*`, foco visível e
  suporte a `prefers-reduced-motion`.
- **Responsivo** (mobile-first) com menu mobile e WhatsApp flutuante.

## 📁 Estrutura

```
.
├── index.html            # Página principal
├── 404.html              # Página de erro personalizada
├── robots.txt            # Diretrizes para buscadores
├── sitemap.xml           # Mapa do site
├── site.webmanifest      # Manifesto PWA
└── assets/
    ├── css/styles.css    # Design system e estilos
    ├── js/main.js        # Interações (menu, FAQ, reveal, etc.)
    └── img/favicon.svg   # Favicon (monograma)
```

## 🚀 Publicação (GitHub Pages + domínio próprio)

O site é servido pelo GitHub Pages no domínio **michelenubiapsi.com.br**
(o arquivo `CNAME` na raiz já configura isso).

**1. Ativar o Pages**
- Em **Settings → Pages → Source**, selecione **Deploy from a branch**.
- Escolha a branch `main` e a pasta `/ (root)` e salve.
- Em **Custom domain**, confirme `michelenubiapsi.com.br` e marque
  **Enforce HTTPS**.

**2. Configurar o DNS** (no painel onde o domínio foi registrado)
- Registros **A** do apex `michelenubiapsi.com.br` apontando para os IPs do
  GitHub Pages:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Registro **CNAME** de `www` apontando para `ademiragencia.github.io`.
- A propagação e a emissão do certificado HTTPS podem levar de alguns
  minutos a algumas horas.

**Endereços finais**
- Site: `https://michelenubiapsi.com.br/`
- Evento: `https://michelenubiapsi.com.br/renovamente/`

## 📇 Contato

- **WhatsApp:** [+55 64 9325-6081](https://wa.me/556493256081)
- **Instagram:** [@michelenubiapsi](https://instagram.com/michelenubiapsi)
