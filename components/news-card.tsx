"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsItem } from "@/app/types";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Link href={item.url}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
            unoptimized
          />
          {item.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <PlayCircle className="w-12 h-12 text-white" />
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={item.type === "video" ? "secondary" : "outline"}>
              {item.type}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {new Date(item.date).toLocaleDateString()}
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
          <div className="mt-3 text-sm text-primary">
            {item.source}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}