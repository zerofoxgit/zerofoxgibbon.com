import Head from 'next/head';
import MascotAnimation from '../components/MascotAnimation';
import HeroSmokeInit from '../components/Hero';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { supabase } from '../utils/supabaseClient';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const { error } = await supabase.from('whitelist').insert({
        email: email || null,
        wallet: wallet || null,
      });
      if (error) throw error;
      setMessage('You are on the list. Watch your inbox for the next drop.');
      setEmail('');
      setWallet('');
    } catch (err: any) {
      setMessage(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const oauth = async (provider: 'google' | 'twitter' | 'facebook' | 'apple') => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: typeof window !== 'undefined' ? window.location.origin : undefined,
      }
    });
  };

  return (
    <>
      <Head>
        <title>Zero Fox Gibbon — Non-Fungible Apparel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Web3-native apparel. Token-gated. Cosmic-timed. Alchemically charged." />
      </Head>

      <main>
        <HeroSmokeInit />
        <MascotAnimation />

        <Section id="about" title="What is Zero Fox Gibbon?">
          <p className="font-[NuttyNoises] text-lg leading-relaxed">
            Zero Fox Gibbon is a web3-native apparel brand fusing ancient mysticism, futuristic tech, and disruptive streetwear.
            Each collection is:
          </p>
          <ul className="mt-4 space-y-3">
            <li>🌌 Cosmic-Inspired: Symbolism rooted in astrology, alchemy, and ancient code</li>
            <li>🧬 Digitally Enhanced: Augmented reality unlockables and hidden experiences</li>
            <li>🔐 Token-Gated: NFT or wallet-based access for exclusive content and drops</li>
            <li>🕰️ Time-Dropped: Launch windows based on equinoxes, solstices, and celestial events</li>
          </ul>
          <p className="mt-6 opacity-90">
            This isn&apos;t merch. It&apos;s a movement encoded in fabric, time, and code.
          </p>
        </Section>

        <Section title="Why It Matters">
          <p className="font-[NuttyNoises] text-lg leading-relaxed">
            Fashion has always been a signal. Now, it’s also a key. Whether it’s unlocking AR overlays, community perks, or real-world experiences,
            each piece you wear isn&apos;t just a fit — it’s an access pass to the Zero Fox Gibbon ecosystem.
          </p>
        </Section>

        <Section id="join" title="Be First to Know">
          <form onSubmit={handleSignup} className="grid gap-4 md:grid-cols-3 items-end">
            <label className="md:col-span-2">
              <span className="block text-sm opacity-80 mb-2">Your email or wallet address (optional)</span>
              <input
                className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 outline-none focus:border-brandAqua transition"
                placeholder="you@domain.com or 9x..."
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 outline-none focus:border-brandAqua transition mt-3"
                placeholder="Solana wallet (optional)"
                value={wallet}
                onChange={(e)=>setWallet(e.target.value)}
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl border border-brandAqua/50 px-5 py-3 hover:border-brandAqua hover:bg-brandAqua/10 transition"
            >
              {loading ? 'Joining...' : 'Notify Me for the Next Drop'}
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={()=>oauth('google')} className="text-sm border border-white/10 rounded-lg px-3 py-2 hover:border-brandAqua/50">Sign in with Google</button>
            <button onClick={()=>oauth('twitter')} className="text-sm border border-white/10 rounded-lg px-3 py-2 hover:border-brandAqua/50">Sign in with Twitter</button>
            <button onClick={()=>oauth('facebook')} className="text-sm border border-white/10 rounded-lg px-3 py-2 hover:border-brandAqua/50">Sign in with Facebook</button>
            <button onClick={()=>oauth('apple')} className="text-sm border border-white/10 rounded-lg px-3 py-2 hover:border-brandAqua/50">Sign in with Apple</button>
            {/* Instagram is not directly supported via Supabase OAuth at this time */}
          </div>

          {message && <p className="mt-4 opacity-80">{message}</p>}

          <p className="mt-8 text-sm opacity-70">
            Disclaimer: No spam. No fluff. Just alchemical drops and encrypted style.
          </p>
        </Section>

        <Section title="The Vision / Lore (Optional)">
          <p className="font-[NuttyNoises] text-lg leading-relaxed">
            We’re not just designing clothes. We’re designing a new layer of reality. Zero Fox Gibbon is where style becomes signal.
            Where time becomes texture. Where the ancient meets the algorithmic. Only for the chosen. Hodlers only.
          </p>
        </Section>

        <Footer />
      </main>
    </>
  );
}
