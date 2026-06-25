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
      <Image
        src={photos[photoIndex]}
        alt={title}
        width={1200}
        height={800}
        className="h-64 w-full rounded-2xl object-cover"
      />
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
