

# Luiza Verônica - Movement Art

Site portfólio da artista Luiza Verônica (dançarina, coreógrafa e pesquisadora), desenvolvido com React + Vite e interface baseada em Tailwind CSS.

## Visão geral

O projeto apresenta:

- Hero com imagem de capa e identidade visual da artista
- Seção "Sobre" com biografia e formação acadêmica
- Portfólio com filtro por categorias (Destaques, Performance, Vídeo, Fotografia e Acadêmico)
- Lightbox para imagens e vídeos (YouTube)
- Seções de serviços, agenda, contato e rodapé

## Stack utilizada

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui + Radix UI
- React Router DOM
- TanStack Query
- Vitest + Testing Library

## Requisitos

- Node.js 18+ (recomendado: versão LTS)
- npm (ou Bun, opcional)

## Como executar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto está configurado para rodar na porta **8080**.

## Scripts disponíveis

- Desenvolvimento:

```bash
npm run dev
```

- Build de produção:

```bash
npm run build
```

- Build em modo desenvolvimento:

```bash
npm run build:dev
```

- Preview do build:

```bash
npm run preview
```

- Lint:

```bash
npm run lint
```

- Testes (uma execução):

```bash
npm run test
```

- Testes em watch:

```bash
npm run test:watch
```

## Deploy

Fluxo básico de publicação:

```bash
npm run build
npx gh-pages -d dist
```

Se preferir, instale o `gh-pages` como dependência de desenvolvimento:

```bash
npm install -D gh-pages
```

## Estrutura principal

```text
src/
	components/
	pages/
	assets/
	hooks/
	lib/
	test/
```

## Fluxo de versionamento (exemplo)

```bash
git add .
git commit -m "Atualiza conteúdo do projeto"
git push
```