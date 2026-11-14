import type { Metadata } from 'next';
import { site, siteUpdatedAt } from '@/data/site';

export const metadata: Metadata = {
  title: 'Confidentialité',
  description: 'Informations sur les données traitées lors de la consultation et du contact.',
  alternates: { canonical: '/confidentialite/' },
};

export default function ConfidentialitePage() {
  return (
    <article className="prose-s pt-14 pb-16">
      <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">Informations pratiques</span>
      <h1 className="mt-2 font-serif text-4xl md:text-5xl text-ink">Confidentialité</h1>
      <p className="mt-4 text-sm text-mute">Mise à jour : {siteUpdatedAt}</p>

      <h2>Éditeur et contact</h2>
      <p>Ce site est édité par Germain-Junior TWAMBA et hébergé sous forme de site statique sur GitHub Pages. Pour toute question relative au site ou à vos données, vous pouvez écrire à <a href={`mailto:${site.email}`}>{site.email}</a>.</p>

      <h2>Messages</h2>
      {site.formEndpoint ? (
        <p>Le formulaire recueille le nom, l’adresse e-mail et le message, puis les transmet au prestataire d’envoi configuré pour cette publication. Ces données servent à répondre à la demande. Avant d’activer ou de remplacer ce prestataire, l’éditeur doit renseigner ici son identité et un lien vers sa politique de confidentialité. Vous pouvez aussi contacter l’éditeur par e-mail.</p>
      ) : (
        <p>Le formulaire d’envoi n’est pas relié à un service dans la configuration publiée actuellement. La page Contact propose donc un lien vers votre application de messagerie. Si vous écrivez, votre adresse, le contenu du message et les éventuelles pièces jointes seront traités par votre fournisseur de messagerie et par le destinataire afin de répondre à votre demande.</p>
      )}

      <h2>Hébergement et journaux techniques</h2>
      <p>GitHub indique que les visites sur les sites GitHub Pages entraînent l’enregistrement de l’adresse IP à des fins de sécurité. Pour en savoir plus sur les traitements effectués par l’hébergeur, consultez la <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" target="_blank" rel="noopener noreferrer">documentation GitHub Pages</a> et la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">déclaration de confidentialité de GitHub</a>.</p>

      <h2>Mesure d’audience et cookies</h2>
      {site.goatcounter ? (
        <>
          <p>Le site utilise GoatCounter pour compter les pages consultées et les fichiers PDF téléchargés. Ce service ne dépose aucun cookie et n’enregistre rien dans votre navigateur. Votre adresse IP n’est pas conservée : elle sert seulement, en mémoire et pendant huit heures au maximum, à distinguer les visites et à en déduire un pays. Les statistiques sont agrégées (pages consultées, fichiers téléchargés, navigateur, système, pays, langue, largeur d’écran) et ne sont partagées avec aucun tiers. Pour en savoir plus, consultez la <a href="https://www.goatcounter.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité de GoatCounter</a>.</p>
          <p>Le site n’utilise aucun cookie publicitaire. Les réglages techniques propres à l’hébergement restent soumis aux informations publiées par GitHub.</p>
        </>
      ) : (
        <p>Le code du site ne configure actuellement aucun outil de mesure d’audience ni cookie publicitaire. Les réglages techniques propres à l’hébergement restent soumis aux informations publiées par GitHub.</p>
      )}

      <h2>Liens vers d’autres services</h2>
      <p>Les liens vers GitHub, Zenodo, Scribd, MonBestSeller et d’autres sites ouvrent des services tiers qui appliquent leurs propres règles de confidentialité. Consultez leurs informations avant de leur transmettre des données.</p>
    </article>
  );
}
