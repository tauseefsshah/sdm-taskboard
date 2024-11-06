This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

To set up the project:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## How

Go through to commits to see how the app progressed. I was told by someone that commit messages tell the story of the codebase and I try to write this story with all my works.

## Design Choices

- **File Based Routing** - Not a fan of app router 🧛
- **Client-side Data Fetching** - I am using `fetch()` with `useEffect()` to get data from the `api/tasks` endpoint rather than `get*Props()` to keep things simple
- **Tailwind Inline Styling** - Madly in love with TailwindCSS and prefer using inline tailwind classes over custom classes. On large projects, components for everything are used and this works well with that.
- **Context Management With UseState** - Not using `redux` to keep things simple
