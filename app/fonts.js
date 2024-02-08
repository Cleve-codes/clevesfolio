import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import { League_Script } from "next/font/google";


export const inter = Inter({ subsets: ["latin"] });

export const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  display: 'swap'
})

export const leagueScript = League_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

