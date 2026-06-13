import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowLeft, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../../../components/Reveal';
import { marketingChannels } from '../../../data/marketingChannels';

export default function MarketingChannel() {
  const { channel } = useParams();
  const service = marketingChannels.find(c => c.slug === channel);

  const currentIndex = marketingChannels.findIndex(c => c.slug === channel);
  const prev = currentIndex > 0 ? marketingChannels[currentIndex - 1] : null;
  const next = currentIndex < marketingChannels.length - 1 ? marketingChannels[currentIndex + 1] : null;

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="text-center">
          <p className="font-display text-6xl font-bold text-gradient opacity-30 mb-4">404</p>
          <h1 className="font-display text-2xl font-bold text-white mb-4">Service not found</h1>
          <p className="text-white/40 mb-8">This marketing service page doesn't exist.</p>
          <Link to="/services/digital-marketing" className="btn-primary">Back to Digital Marketing</Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="pt-32">
      {/* Back */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <Link
          to="/services/digital-marketing"
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft size={15} /> Back to Digital Marketing
        </Link>
      </div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-6 pb-20"
      >
        <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 ${service.accentColor} border-current/30 bg-current/5`}
          style={{ borderColor: 'currentColor', background: 'transparent' }}
        >
          <span className={`text-xs font-semibold uppercase tracking-widest ${service.accentColor}`}>
            Digital Marketing
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              {service.title}
            </h1>
            <p className="text-white/50 text-xl leading-relaxed mb-8">{service.heroText}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-7 py-3.5">
                Get a Free Audit <ArrowRight size={15} />
              </Link>
              <Link to="/portfolio" className="btn-outline px-7 py-3.5">See Results</Link>
            </div>
          </div>

          {/* Hero graphic */}
          <div className={`aspect-square max-w-xs mx-auto lg:mx-0 lg:ml-auto rounded-3xl bg-gradient-to-br ${service.color} border border-white/10 flex items-center justify-center`}>
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Icon size={40} className={service.accentColor} />
              </div>
              <p className={`font-display font-bold text-lg ${service.accentColor}`}>{service.shortTitle}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Results strip */}
      <section className="bg-dark-2 border-y border-white/5 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {service.results.map((r, i) => (
              <Reveal key={i} delay={i * 0.1} className="text-center">
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-primary" />
                  <span className="text-white font-semibold text-sm">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <p className="section-label mb-4">What's included</p>
          <h2 className="font-display text-3xl font-bold text-white mb-5 leading-tight">
            {service.overview.split('.')[0]}.
          </h2>
          <p className="text-white/40 leading-relaxed">{service.overview}</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3">
          {service.bullets.map((b, i) => (
            <Reveal key={b} delay={i * 0.05}>
              <div className="flex items-start gap-2.5 bg-white/3 border border-white/5 rounded-xl p-3.5">
                <CheckCircle size={13} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-xs leading-relaxed">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-dark-2 border-y border-white/5 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <p className="section-label mb-4">Our approach</p>
            <h2 className="section-heading mb-14">How we deliver results</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className={`card-glass p-7 bg-gradient-to-br ${service.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-primary font-bold text-sm font-display">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-bold text-white">{f.title}</h3>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other channels */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="section-label mb-6">Explore all digital marketing services</p>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {marketingChannels
            .filter(c => c.slug !== channel)
            .map(c => (
              <Link
                key={c.slug}
                to={`/services/digital-marketing/${c.slug}`}
                className="btn-outline text-xs px-4 py-2"
              >
                {c.shortTitle} <ArrowRight size={11} />
              </Link>
            ))}
        </div>
      </section>

      {/* Prev / Next */}
      {(prev || next) && (
        <section className="bg-dark-2 border-t border-white/5 py-10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row gap-4 justify-between">
            {prev ? (
              <Link to={`/services/digital-marketing/${prev.slug}`} className="flex items-start gap-3 group flex-1">
                <ArrowLeft size={15} className="text-white/30 group-hover:text-primary transition-colors mt-1 shrink-0" />
                <div>
                  <p className="text-white/25 text-xs mb-1">Previous service</p>
                  <p className="text-white/60 text-sm group-hover:text-white transition-colors">{prev.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
            {next && (
              <Link to={`/services/digital-marketing/${next.slug}`} className="flex items-start gap-3 group flex-1 sm:text-right sm:flex-row-reverse">
                <ArrowRight size={15} className="text-white/30 group-hover:text-primary transition-colors mt-1 shrink-0" />
                <div>
                  <p className="text-white/25 text-xs mb-1">Next service</p>
                  <p className="text-white/60 text-sm group-hover:text-white transition-colors">{next.title}</p>
                </div>
              </Link>
            )}
          </div>
        </section>
      )}

      
    </main>
  );
}
