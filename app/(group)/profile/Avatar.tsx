"use client";

import Image from "next/image";

import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => (
  <div className={styles.container}>
    <Image src={src} alt="avatar" width={100} height={100} priority />
  </div>
);

export default Avatar;
