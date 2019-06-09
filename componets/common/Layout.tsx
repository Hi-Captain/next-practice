import Nav from './Nav';

const Layout = (props: any) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  )
}

export default Layout