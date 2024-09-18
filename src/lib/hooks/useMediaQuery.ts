'use client';

import { useEffect, useState } from "react";

export type MediaQueries = {
  width: number;
  height: number;
  isCompact: boolean;
  isGreaterThanCompact: boolean;
  isMedium: boolean;
  isLessThanMedium: boolean;
  isGreaterThanMedium: boolean;
  isExpanded: boolean;
  isLessThanExpanded: boolean;
  isGreaterThanExpanded: boolean;
  isLarge: boolean;
  isLessThanLarge: boolean;
  isGreaterThanLarge: boolean;
  isExtraLarge: boolean;
  isLessThanExtraLarge: boolean;
  isPortrait: boolean;
  isLandscape: boolean;
}

export function useMediaQuery(): MediaQueries {
  const [queries, setQueries] = useState<MediaQueries>({
    width: 0,
    height: 0,
    isCompact: false,
    isGreaterThanCompact: false,
    isMedium: false,
    isLessThanMedium: false,
    isGreaterThanMedium: false,
    isExpanded: false,
    isLessThanExpanded: false,
    isGreaterThanExpanded: false,
    isLarge: false,
    isLessThanLarge: false,
    isGreaterThanLarge: false,
    isExtraLarge: false,
    isLessThanExtraLarge: false,
    isLandscape: false,
    isPortrait: false,
  });

  useEffect(() => {
    const checkMedia = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setQueries({
        width,
        height,
        isCompact: width <= 599,
        isGreaterThanCompact: width > 599,
        isMedium: width >= 600 && width <= 839,
        isLessThanMedium: width < 600,
        isGreaterThanMedium: width > 839,
        isExpanded: width >= 840 && width <= 1199,
        isLessThanExpanded: width < 840,
        isGreaterThanExpanded: width > 1199,
        isLarge: width >= 1200 && width <= 1399,
        isLessThanLarge: width < 1200,
        isGreaterThanLarge: width > 1399,
        isExtraLarge: width >= 1400,
        isLessThanExtraLarge: width < 1400,
        isLandscape: width > height,
        isPortrait: width < height,
      });
    };
    checkMedia();
    window.addEventListener('resize', checkMedia);
    return () => {
      window.removeEventListener('resize', checkMedia);
    };
  }, []);

  return queries;
}
