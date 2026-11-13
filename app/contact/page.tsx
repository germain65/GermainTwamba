// Fichier : app/contact/page.tsx
// Rôle    : Page de contact direct et formulaire pour Germain-Junior TWAMBA
// Auteur  : Germain-Junior TWAMBA

import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contacter Germain-Junior TWAMBA — auteur des manuels de mathématiques pour finalistes.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <div className="pt-14 pb-16">
      <header className="mb-12 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
          Échange &amp; Correspondance
        </span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl text-ink">
          Prendre contact
        </h1>
        <p className="mt-4 text-base text-mute leading-relaxed">
          Que vous soyez élève finaliste bloqué sur un problème, enseignant désireux d&apos;utiliser ces manuels en classe, lecteur ayant repéré une coquille ou passionné de sciences souhaitant échanger, vous pouvez m&apos;écrire directement.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        {/* Cartes de contact direct */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Coordonnées directes
          </h2>

          <div className="space-y-4">
            {/* Email institutionnel */}
            <div className="border-2 border-ink p-5 bg-paper">
              <span className="text-xs font-mono text-accent uppercase font-bold">
                Adresse e-mail institutionnelle
              </span>
              <p className="mt-1 font-serif text-xl font-medium text-ink">
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-accent hover:underline break-all"
                >
                  {site.email}
                </a>
              </p>
              <p className="mt-2 text-xs text-mute">
                Relevé régulier &middot; Étudiant à l&apos;École polytechnique de Louvain (UCLouvain)
              </p>
            </div>

            {/* LinkedIn */}
            <div className="border border-rule p-5 bg-tint/20">
              <span className="text-xs font-mono text-mute uppercase font-bold">
                Réseau professionnel
              </span>
              <p className="mt-1 font-serif text-lg font-medium text-ink">
                <a
                  href="https://www.linkedin.com/in/germain-junior-twamba-697519338/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent hover:underline"
                >
                  LinkedIn &mdash; Germain-Junior Twamba &nearr;
                </a>
              </p>
              <p className="mt-1 text-xs text-mute">
                Parcours académique, actualités et réseau
              </p>
            </div>

            {/* GitHub */}
            <div className="border border-rule p-5 bg-tint/20">
              <span className="text-xs font-mono text-mute uppercase font-bold">
                Code &amp; Dépôts libres
              </span>
              <p className="mt-1 font-serif text-lg font-medium text-ink">
                <a
                  href="https://github.com/germain65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent hover:underline"
                >
                  GitHub &mdash; @germain65 &nearr;
                </a>
              </p>
              <p className="mt-1 text-xs text-mute">
                Codes sources, scripts Asymptote/Python et projets libres
              </p>
            </div>
          </div>

          <div className="border-l-2 border-ink pl-4 pt-2 text-xs text-mute leading-relaxed">
            <p className="font-semibold text-ink">Signalement d&apos;errata :</p>
            <p className="mt-1">
              Pour toute remarque sur un exercice ou un corrigé des tomes I et II, merci d&apos;indiquer le tome concerné, le numéro du chapitre et la page de l&apos;ouvrage pour faciliter la révision dans la prochaine édition.
            </p>
          </div>
        </div>

        {/* Formulaire de message */}
        <div className="border-2 border-ink p-6 sm:p-8 bg-paper">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-2">
            Envoyer un message
          </h2>
          <p className="text-xs text-mute mb-6">
            {site.formEndpoint ? 'Le formulaire transmet votre message au service d’envoi configuré pour le site.' : 'Le formulaire n’étant pas relié à un service d’envoi, vous pouvez écrire directement depuis votre application de messagerie.'}
          </p>
          <ContactForm />
          <p className="mt-6 border-t border-rule pt-4 text-xs text-mute">Pour savoir quelles données peuvent être traitées, consultez la <Link href="/confidentialite/" className="underline underline-offset-4 hover:text-accent">note de confidentialité</Link>.</p>
        </div>
      </div>
    </div>
  );
}
