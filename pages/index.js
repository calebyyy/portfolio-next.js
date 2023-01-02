import Head from 'next/head'
import Main from '../Components/Main'
import About from '../components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
 
export default function Home() {
  return (
    <div >
      <Head>
        <title>Caleb Ng</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
      
    </div>
  )
}
