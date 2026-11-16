// Fichier : components/JsonLd.tsx
// Rôle    : Injecte des données structurées schema.org (JSON-LD) lisibles par Google
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
