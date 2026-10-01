import IntroAnimation from './components/IntroAnimation'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ExperienciaCliente from './components/ExperienciaCliente'
import Diferenciais from './components/Diferenciais'
import Portfolio from './components/Portfolio'
import Processo from './components/Processo'
import Depoimentos from './components/Depoimentos'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const WHATSAPP = '5565999999999'

export default function App() {
  return (
    <>
      <IntroAnimation />
      <Header whatsapp={WHATSAPP} />
      <main>
        <Hero whatsapp={WHATSAPP} />
        <About />
        <ExperienciaCliente />
        <Diferenciais />
        <Portfolio whatsapp={WHATSAPP} />
        <Processo />
        <Depoimentos />
        <CTA whatsapp={WHATSAPP} />
      </main>
      <Footer whatsapp={WHATSAPP} />
      <WhatsAppButton whatsapp={WHATSAPP} />
    </>
  )
}
