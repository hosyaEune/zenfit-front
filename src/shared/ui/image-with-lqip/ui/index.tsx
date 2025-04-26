import { type FC, useState } from "react";

import type { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import styles from "./styles.module.css";

type Props = {
  lqip: number;
} & ImageProps;

export const ImageWithLQIP: FC<Props> = ({ lqip, style, ...props }) => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <Image
      width="100%"
      height="100%"
      objectFit="cover"
      className={styles.image}
      loading={isLoad ? undefined : "lazy"}
      onLoad={() => setIsLoad(true)}
      style={
        {
          "--lqip": lqip,
          ...style,
        } as typeof style
      }
      {...props}
    />
  );
};
