"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Video.module.css";

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string; // src for video file
  rate?: number; // playback rate
  desc?: string; // optional description
}
function Video({ src, desc, rate = 1, ...rest }: VideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  }, []);

  return (
    <video
      className={styles.video}
      ref={videoRef}
      width="600"
      height="300"
      preload="metadata"
      {...rest}
    >
      <source src={src} type="video/mp4" />
      {desc}
    </video>
  );
}

export default Video;
