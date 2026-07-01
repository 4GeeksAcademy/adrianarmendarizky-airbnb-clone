"use client";

import { useState } from "react";
import Image from "next/image";

interface PhotoGalleryProps {
  photos: string[];
  title: string;
}

export const PhotoGallery = ({ photos, title }: PhotoGalleryProps) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const total = photos.length;

  const showPrevious = () => {
    setPhotoIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setPhotoIndex((current) => (current + 1) % total);
  };

  return (
    <section className="space-y-3">
      <div className="relative">
        <Image
          src={photos[photoIndex]}
          alt={title}
          width={1200}
          height={800}
          className="h-56 w-full rounded-2xl object-cover sm:h-64 md:h-72 lg:h-80"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <button type="button" className="rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-slate-800 sm:px-3">
            ← Back
          </button>
          <button type="button" className="rounded-full bg-white/95 px-2 py-1 text-xs text-slate-800">↗</button>
          <button type="button" className="rounded-full bg-white/95 px-2 py-1 text-xs text-slate-800">♡</button>
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-slate-900/75 px-3 py-1 text-xs text-white">
          {photoIndex + 1}/{total}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          {photoIndex + 1}/{total}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={showPrevious}
            className="rounded-full border border-slate-300 px-3 py-1 text-sm"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={showNext}
            className="rounded-full border border-slate-300 px-3 py-1 text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};
