import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

export function Privacy() {
  return (
    <main className="pt-32 pb-28 max-w-3xl mx-auto px-6">
      <SEO
        title="Privacy Policy"
        description="Read the Clikconsult privacy policy for details on how we collect, use, and protect personal information."
        path="/privacy"
      />
      <Reveal>
        <p className="section-label mb-4">Legal</p>
        <h1 className="section-heading mb-10">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-white/50 text-sm leading-relaxed">
          <p>Last updated: January 1, 2025</p>
          <p>Clikconsult ("we", "us", "our") is committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights regarding that data.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">What we collect</h2>
          <p>When you fill out a contact form or subscribe to our newsletter, we collect your name, email address, phone number, and any information you voluntarily provide about your project.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">How we use your data</h2>
          <p>We use your information solely to respond to your enquiry, deliver agreed services, and send you updates you've opted into. We never sell or share your data with third parties for marketing purposes.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">Cookies</h2>
          <p>We use minimal cookies for analytics (to understand how visitors use our site) and functionality. You can opt out of analytics cookies at any time.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">Your rights</h2>
          <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. Contact us at hello@clikconsult.com to exercise these rights.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">Contact</h2>
          <p>For any privacy-related questions, email us at <a href="mailto:hello@clikconsult.com" className="text-primary hover:underline">hello@clikconsult.com</a>.</p>
        </div>
      </Reveal>
    </main>
  );
}

export function Terms() {
  return (
    <main className="pt-32 pb-28 max-w-3xl mx-auto px-6">
      <SEO
        title="Terms of Use"
        description="Read the Clikconsult terms of use for our website, digital agency services, payments, ownership, and liability terms."
        path="/terms"
      />
      <Reveal>
        <p className="section-label mb-4">Legal</p>
        <h1 className="section-heading mb-10">Terms of Use</h1>
        <div className="space-y-6 text-white/50 text-sm leading-relaxed">
          <p>Last updated: January 1, 2025</p>
          <p>By using the Clikconsult website and engaging our services, you agree to these terms. Please read them carefully.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">Services</h2>
          <p>Clikconsult provides web development, mobile application development, desktop software, web automation, and digital marketing services. Specific terms for each engagement are set out in individual client agreements.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">Intellectual property</h2>
          <p>Upon full payment, clients receive full ownership of all custom deliverables created for their project. Third-party tools, libraries, and frameworks remain subject to their respective licences.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">Payments</h2>
          <p>Projects are typically structured with a 50% deposit before work commences and the remaining 50% upon completion and approval. Payment terms are agreed in writing before any project begins.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">Limitation of liability</h2>
          <p>Clikconsult's liability is limited to the fees paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.</p>
          <h2 className="font-display font-bold text-white text-xl mt-8 mb-3">Contact</h2>
          <p>Questions about these terms? Email <a href="mailto:hello@clikconsult.com" className="text-primary hover:underline">hello@clikconsult.com</a>.</p>
        </div>
      </Reveal>
    </main>
  );
}
