"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackLabel?: string;
};

export function SafeImage({
  alt,
  className,
  fallbackLabel = "Vitosha Active",
  onError,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-white to-teal-50 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white shadow-sm">
          VA
        </span>
        <span className="mt-3 max-w-32 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={(event) => {
        setFailed(true);
        onError?.(event);
      }}
      {...props}
    />
  );
}
