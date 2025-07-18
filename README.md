# Dropbox Sign Next.js App
The current [@dropbox/sign](https://github.com/hellosign/dropbox-sign-node) Node SDK uses node modules which cannot run on client components.

Due to the nature of Next.js, this can cause errors during compile time.

This is a Next.js basic app using the [@dropbox/sign](https://github.com/hellosign/dropbox-sign-node) Node SDK, as well as the [hellosign-embedded](https://github.com/hellosign/hellosign-embedded) client-side library.

This example app relies on the use of `'use server'` directive to be able to perform [Server Actions and Mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) from client components.

## How to use

### Install dependencies:

```bash
npm install
```

### Set up environmental variables:

Create a new file named `.env.local` in the root of the project and add your Dropbox Sign `API_KEY` and `CLIENT_ID`.

### Start the App:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes
* This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
* This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Roboto, a custom Google Font.
* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
* [Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
