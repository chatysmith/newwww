import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FuckBook | Fucking Community!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="FUCKBOOK" />
        <p className="description">
          ccccc <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
