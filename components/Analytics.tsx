// Fichier : components/Analytics.tsx
// Rôle    : Mesure d'audience GoatCounter (sans cookie, sans stockage dans le navigateur)
//           Compte les pages vues et les téléchargements de PDF.
//           Désactivée tant que NEXT_PUBLIC_GOATCOUNTER n'est pas renseignée (voir README §8).

'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { site } from '@/data/site';

type CountArgs = { path: string; title?: string; event?: boolean };

declare global {
  interface Window {
    goatcounter?: { count?: (args: CountArgs) => void };
  }
}

const count = (args: CountArgs) => window.goatcounter?.count?.(args);

export default function Analytics() {
  const code = site.goatcounter;
  const pathname = usePathname();
  const ready = useRef(false);

  // Pages vues lors d'un changement de page (navigation interne sans rechargement)
  useEffect(() => {
    if (code && ready.current) count({ path: pathname });
  }, [code, pathname]);

  // Téléchargements : chaque clic sur un lien vers un PDF est compté comme un événement
  useEffect(() => {
    if (!code) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href$=".pdf"]') as HTMLAnchorElement | null;
      if (!link) return;
      const file = link.pathname.split('/').pop() || 'fichier.pdf';
      count({ path: `telechargement/${file}`, title: `Téléchargement ${file}`, event: true });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [code]);

  if (!code) return null;

  return (
    <Script
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
      data-goatcounter={`https://${code}.goatcounter.com/count`}
      data-goatcounter-settings='{"no_onload": true}'
      onReady={() => {
        // no_onload évite le double comptage : on compte nous-mêmes la première page
        ready.current = true;
        count({ path: pathname });
      }}
    />
  );
}
