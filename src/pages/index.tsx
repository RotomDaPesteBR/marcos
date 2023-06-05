import Head from 'next/head';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title />
        <meta name="description" content="" />
      </Head>
      <header>
        <h1>{}</h1>
      </header>
      <main>
        <div className="container">
          <Hero />
          <Content />
          <Footer />
        </div>
      </main>
      <footer>
        <div>
          <p />
        </div>
      </footer>
    </div>
  );
}
