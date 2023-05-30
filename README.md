# Wallpapers - AI Generated Wallpapers Browser App

![Wallpapers Banner](https://wallpapers.fyi/banner-image.jpg)

Wallpapers is a web application designed to showcase the power and versatility of Leap's AI-generated images. It enables you to browse and download stunning AI-generated wallpapers that update every hour. Built with Next.js and Supabase, Wallpapers is a perfect starting point for developers looking to get hands-on with AI-powered images using Leap.

Visit the live project at [https://wallpapers.fyi](https://wallpapers.fyi).

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![ESLint](https://img.shields.io/badge/code_style-ESLint-5ed9c7.svg)
[![Next.js](https://img.shields.io/badge/built_with-Next.js-0070f3)](https://nextjs.org/)

## Leap API: The Creative Engine Behind Wallpapers

At the heart of Wallpapers is the Leap API, a powerful suite of AI APIs responsible for generating the mesmerizing AI-generated wallpapers. The Leap Image Generation API supplies a constant stream of unique and visually stunning wallpapers for users to explore, view, and download.

Get started by signing up for an API key at [Leap](https://tryleap.ai/) and unlock the potential of AI-driven image creation.

For more information about the Leap Image Generation API, take a look at the [Leap API reference](https://docs.tryleap.ai/reference/controlcontroller_create).

## Getting Started

To set up and run the Wallpapers app on your local machine, follow these steps:

1. Clone the repository:

```
git clone https://github.com/leap-api/wallpapers-ai.git
```

2. Enter the `wallpapers-ai` directory:

```
cd wallpapers
```

3. Install dependencies:

```
yarn
```

4. Create a `.env` file in the `wallpapers-ai` directory and include these environment variables:

```
SUPABASE_KEY=your_supabase_key
SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_google_analytics_id
```

5. Start the development server:

```
yarn dev
```

The Wallpapers app should now be running on your local machine.

## Supabase Database for Wallpapers

Wallpapers utilizes Supabase to store and retrieve AI-generated images in a database. This ensures that users can easily browse the collection of wallpapers and have a seamless experience when interacting with the app.

## Contributing

We welcome contributions to Wallpapers and appreciate your interest in making it even better. If you have suggestions for improvements or major modifications, please open an issue to discuss your ideas.

## Resources and Support

For any questions or assistance, feel free to reach out via email or join our Discord community:

- Discord Community: [Wallpapers Discord](https://discord.gg/NCAKTUayPK)
- Help Email: help@wallpapers.fyi

## License

Wallpapers is released under the [MIT License](https://choosealicense.com/licenses/mit/).
