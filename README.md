# Arboria AI

## Running locally

You will need to add the following environment variables to a `.env` file:
OPENAI_API_KEY - for model available at openAI website
AUTH_SECRET - for nextAuth can be random
AUTH_GITHUB_ID - for nextAuth github provider
AUTH_GITHUB_SECRET - for nextAuth github provider
KV_URL - for Vercel db
KV_REST_API_URL - for db
KV_REST_API_TOKEN - for db
KV_REST_API_READ_ONLY_TOKEN - for db

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Features and tools used

- [Next.js](https://nextjs.org) App Router
- [NextAuth.js](https://github.com/nextauthjs/next-auth) for authentication
- React Server Components (RSCs), Suspense, and Server Actions
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv)


## Model Information

This app utilizes OpenAI's API to call the `gpt-3.5-turbo` model.


## Future Updates

- Further fine tuning of the model
- Adding Google provider for easier login
- Update chat sidebar dark mode color values