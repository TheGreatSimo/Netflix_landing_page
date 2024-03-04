import { Nav, Hero, Enjoy, Download, Watch, Kids, Faq, Footer } from "@/sections";

export default function Home() {
  return (

  <main className="relative"  >
    <Nav />
    <section> 
      <Hero />
    </section>

    <section>
      <Enjoy />
    </section>

    <section>
      <Download />
    </section>

    <section>
      <Watch />
    </section>

    <section>
      <Kids />
    </section>

    <section>
      <Faq />
    </section>

    <section>
      <Footer />
    </section>

  </main>
  );
}
