import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Globe } from "lucide-react";

export default function MetadataDisplay({
  metadata,
}: {
  metadata: {
    url: string;
    title: string;
    icon: string;
  };
}) {
  const domain = new URL(metadata.url).hostname;

  return (
    <Card className="w-full max-w-md shadow-lg border bg-white">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            {metadata.icon ? (
              <img
                src={metadata.icon}
                alt="Website icon"
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : null}
            <Globe
              className="w-8 h-8 text-gray-400"
              style={{ display: metadata.icon ? "none" : "flex" }}
            />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
              {metadata.title}
            </h1>
            <p className="text-sm text-gray-500 font-medium">{domain}</p>
          </div>

          {/* URL Link */}
          <a
            href={metadata.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            Visit Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
