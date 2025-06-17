# URL Metadata Extractor

A web application where users can submit any URL, and the system fetches its metadata (title, description, preview image) in the background. Fetched metadata is displayed to the user.

Built with **Next.js**, **TypeScript**, and powered by **Redis** for caching.

## Features

- Submit any public URL and fetch metadata in real-time.
- Extracts title, description, preview image, and more.
- Caches results in Redis to reduce repeated fetches.

## Tech Stack

- [Next.js 14+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redis](https://redis.io/)
- [Docker & Docker Compose](https://docs.docker.com/compose/)

## Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/saliyavivek/url-metadata-extractor.git
cd url-metadata-extractor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Rename the `env.example` file to `.env`.
Replace `REDIS_URL` with your redis url.

### 4. Start development server

```bash
npm run dev
```

## Docker Setup

### 1. Build and start the app + Redis using Docker Compose

```bash
docker-compose up --build
```

This starts:

- Your Next.js app at http://localhost:3000.
- Redis server at redis://redis:6379 (internal Docker network).
