"use client";

import MetadataDisplay from "@/components/MetadataDisplay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [showMetadata, setShowMetadata] = useState(false);
  const [metadata, setMetadata] = useState<{
    url: string;
    title: string;
    icon: string;
  }>({
    url: "https://example.com",
    title: "example",
    icon: "",
  });

  async function handleSubmit() {
    const res = await fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    setMetadata(data.metadata);
    setShowMetadata(true);
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit();
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col gap-2 w-96">
        <Label htmlFor="url">URL</Label>
        <div className="flex gap-2">
          <Input
            type="text"
            id="url"
            placeholder="Enter URL"
            className="flex-1"
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button onClick={handleSubmit}>Search</Button>
        </div>
      </div>
      {showMetadata && <MetadataDisplay metadata={metadata} />}
    </div>
  );
}
