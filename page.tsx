import Link from 'next/link';
export default function Page() { return (<main>
  <section className="hero"><div className="container hero__inner">
    <div className="hero__content"><h1>Shop smart. Live better.</h1>
      <p>Discover curated, high-quality products at competitive prices with a seamless shopping experience.</p>
      <div className="hero__actions"><Link href="/products" className="btn btn--primary">Browse Products</Link><a href="#about" className="btn btn--ghost">Learn More</a></div>
    </div>
    <div className="hero__media"><img src="/assets/hero-placeholder.svg" alt="Products preview" /></div>
  </div></section>
  <section id="about" className="section section--alt"><div className="container"><div className="section__head"><h2>About Lunver-Shop</h2><p className="muted">A modern, lightweight storefront ready for your catalog.</p></div>
    <div className="grid grid--2"><div><h3>Fast & Secure</h3><p>Next.js server components and API routes provide a fast, dynamic experience.</p></div>
    <div><h3>Easy to Customize</h3><p>Connect any database or headless CMS later without changing the UI.</p></div></div></div></section>
  <section id="contact" className="section"><div className="container"><div className="section__head"><h2>Contact</h2><p className="muted">Have questions? Send us a message below.</p></div>
    <form className="contact" action="/api/contact" method="post"><input type="text" name="name" placeholder="Your name" required /><input type="email" name="email" placeholder="Email address" required /><textarea name="message" rows={4} placeholder="Your message" /><button className="btn btn--primary">Send</button></form>
  </div></section></main> ); }