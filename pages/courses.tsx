import Layout from "../componets/common/Layout";
import Link from "next/link";

const CourseLink = (props: any) => {
  return (
    <li>
      <Link as={`/courses/${props.id}`} href={`/course?title=${props.title}`}>
        <button>{props.title}</button>
      </Link>
    </li>
  )
}

export default () => {
  return (
    <Layout>
      <h1>Hi! this is Courses</h1>
      <ul>
        <CourseLink id={'1'} title={'Python'} />
        <CourseLink id={'3'} title={'JAVA'} />
        <CourseLink id={'4'} title={'HTML'} />
        <CourseLink id={'5'} title={'Javascript'} />
      </ul>
    </Layout>
  )
}