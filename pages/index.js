import Head from 'next/head'
import Main from '../components/Main.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
 
export default function Home() {
  return (
    <div >
      <Head>
        <title>Caleb Ng</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Main />
    {/* <About />
    <Projects />
    <Skills /> */}
      
    </div>
  )
}
