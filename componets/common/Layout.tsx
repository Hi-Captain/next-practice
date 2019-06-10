import "../../styles/base.scss"
import Nav from './Nav';
import Head from 'next/head'
import Footer from './Footer';


const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>코드잇 | 최고의 프로그래밍 교육을 모두에게!</title>
      </Head>
      <Nav />
      <main>
        {props.children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout