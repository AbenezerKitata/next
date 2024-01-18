import { Inter } from 'next/font/google';
import { Acme } from 'next/font/google';
import { Lusitana } from 'next/font/google';


export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Inter({ subsets: ['latin'], weight: '800',  });
export const acme = Acme({ weight: '400', subsets: ['latin'], display: 'swap', style: 'normal', adjustFontFallback: true,    preload: true, fallback: ['sans-serif'] });


