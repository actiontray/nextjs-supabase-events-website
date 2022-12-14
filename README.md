<h1 align="center">Events Website Template with Next.js and Supabase</h1>

This is a template from which you can start create events website. It is built with:
- [Next.js](https://nextjs.org/) - framework to create websites,
- [Supabase](https://supabase.com) - service to store user data and manage user-related features,
- [Web Actions API](https://github.com/actiontray/web-actions-api) - API to fetch user events details and constraints, intended to be used by [ActionTray events execution planning service](https://actiontray.vercel.app).

<img width="972" alt="Screenshot 2022-12-21 at 23 02 03" src="https://user-images.githubusercontent.com/9825562/209010806-bb638fdc-8f06-487d-ae33-c900d5e8f71d.png">

## Project description

Go to [nextjs-supabase-events-website.vercel.app](https://nextjs-supabase-events-website.vercel.app) to see example deployment:

- on [/](https://nextjs-supabase-events-website.vercel.app/) you can see all available events within the website,
- on [/actionapi/items](https://nextjs-supabase-events-website.vercel.app/actionapi/items) and [/actionapi/state](https://nextjs-supabase-events-website.vercel.app/actionapi/state) you can see all data about available events within the website and users events state accordingly, prepared according to the [Web Actions API](https://github.com/actiontray/web-actions-api).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
