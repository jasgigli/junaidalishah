import { useEffect, useState } from "react";

export function useTypingAnimation(words: string[], interval = 1600) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return words[index];
}
