import React, { useEffect, useRef } from "react";
import type { VideoProps } from "components/video/type";

export const Video: React.FC<VideoProps> = ({ source }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && videoRef.current) {
      videoRef.current.play().catch((err) => console.error(err));
    }
  }, []);

  return (
    <video
      ref={videoRef}
      playsInline
      className="size-full object-cover"
      autoPlay
      loop
      muted
      src={source}
    />
  );
};
