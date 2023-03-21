import React, { createContext, useRef, useState } from "react";
export const CharacteContext = createContext(null);

function Charactestatus({ children }: { children: React.ReactNode }) {
  const [charbody, setCharbody] = useState<number>(1);
  const [charhair, setCharhair] = useState<number>(0);
  const [charhaircolor, setCharhaircolor] = useState<number>(1);
  const [chartop, setChartop] = useState<number>(1);
  const [charbottom, setCharbottom] = useState<number>(1);
  const [charshoes, setCharshoes] = useState<number>(1);
  const [hairpalette, setHairpalette] = useState<string[]>([
    "bob",
    "braids",
    "buzzcut",
    "curly",
    "emo",
    "extra_long",
    "extra_long_skirt",
    "french_curl",
    "gentleman",
    "long_straight",
    "long_straight_skirt",
    "midiwave",
    "ponytail",
    "spacebuns",
    "wavy",
  ]);
  const [user, setUser] = useState({});

  const value = {
    charshoes,
    setCharshoes,
    charbottom,
    setCharbottom,
    charbody,
    setCharbody,
    charhair,
    setCharhair,
    charhaircolor,
    setCharhaircolor,
    chartop,
    setChartop,
    hairpalette,
    setHairpalette,
    user,
    setUser,
  };

  return <CharacteContext.Provider value={value}>{children}</CharacteContext.Provider>;
}

export default Charactestatus;
