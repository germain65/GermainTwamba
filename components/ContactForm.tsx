'use client';
import { useState } from 'react';
import { site } from '@/data/site';
type S = 'idle' | 'sending' | 'ok' | 'err';
export default function ContactForm() {
  const [s, setS] = useState<S>('idle'); const [msg, setMsg] = useState('');
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget; const d = new FormData(f);
    if (d.get('_gotcha')) return; // anti-spam : champ piège invisible
    if (!site.formEndpoint) { setS('err'); setMsg('Le formulaire n’est pas encore relié à un service d’envoi. Renseignez NEXT_PUBLIC_FORM_ENDPOINT (voir README).'); return; }
    setS('sending');
    try {
      const r = await fetch(site.formEndpoint, { method: 'POST', body: d, headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error();
      setS('ok'); f.reset();
    } catch { setS('err'); setMsg('Le message n’a pas pu être envoyé. Réessayez dans un instant.'); }
  }
  const field = 'mt-1 min-h-11 w-full border border-rule bg-paper px-3 py-2';
  if (s === 'ok') return <p role="status" className="font-serif text-xl">Message envoyé. Vous recevrez une réponse par e-mail.</p>;
  if (!site.formEndpoint) return (
    <div className="space-y-3 text-sm leading-relaxed">
      <p>Le formulaire n’est pas encore relié à un service d’envoi. Pour écrire, utilisez directement votre application de messagerie :</p>
      <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center bg-ink px-5 font-medium text-paper hover:opacity-85">Écrire à {site.email}</a>
      <p className="text-xs text-mute">Le site ne transmet ni ne stocke votre message depuis cette page. Votre application de messagerie et son fournisseur traitent l’e-mail.</p>
    </div>
  );
  return (
    <form onSubmit={submit} className="max-w-xl space-y-5">
      <label className="block text-sm">Nom<input name="name" required minLength={2} autoComplete="name" className={field} /></label>
      <label className="block text-sm">Adresse e-mail<input name="email" type="email" required autoComplete="email" className={field} /></label>
      <label className="block text-sm">Message<textarea name="message" required minLength={10} rows={6} className={field} /></label>
      <input name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />
      <button disabled={s === 'sending'} className="min-h-11 bg-ink px-5 text-paper disabled:opacity-60">{s === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}</button>
      {s === 'err' && <p role="alert" className="text-sm text-accent">{msg}</p>}
    </form>
  );
}
