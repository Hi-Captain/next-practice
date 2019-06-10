import Layout from "../componets/common/Layout";
import { withRouter } from "next/router";

const Content = withRouter((props: any) => {
  return(
    <h1>This is {props.router.query.title} Course</h1>
  )
})

export default () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}
