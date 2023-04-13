import { useEffect, useState } from "react";
import { em } from "polished";
import { tokens } from "@/styles";

// FIXME: Similar parts to styles/utils.css.ts 'screen' utility

type ScreenKey = keyof typeof tokens.screen;

export default function useMatchScreenSize(
  screen: ScreenKey | number,
  defaultMatch = false
) {
  const query = `screen and (min-width: ${em(
    typeof screen === "number" ? screen : tokens.screen[screen] + "px"
  )})`;
  const [match, setMatch] = useState(defaultMatch);
  useEffect(() => {
    function onMatchQueryChange(query: MediaQueryListEvent) {
      setMatch(query.matches);
    }
    const matchQuery = window.matchMedia(query);
    matchQuery.addEventListener("change", onMatchQueryChange);
    setMatch(matchQuery.matches);
    return () => {
      matchQuery.removeEventListener("change", onMatchQueryChange);
    };
  }, [query]);
  return match;
}
