import { NextRequest, NextResponse } from "next/server";
import fetchMeta from "fetch-meta-tags";
import redis from "@/lib/redis";

export async function POST(req: NextRequest) {
    const { url } = await req.json();

    if (!url || typeof url !== "string" || !url.startsWith("http")) {
        return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    try {
        const cacheKey = `meta:${url}`;

        // Check Redis first
        const cached = await redis.get(cacheKey);
        console.log("cached", cached);
        if (cached) {
            return NextResponse.json({ success: true, url, metadata: JSON.parse(cached) });
        }

        const metadata = await fetchMeta(url);

        await redis.set(cacheKey, JSON.stringify(metadata), "EX", 3600); // 1 hour expiry

        return NextResponse.json({ success: true, url, metadata });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Something went wrong", error }, { status: 500 });
    }
}
