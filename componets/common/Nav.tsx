import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href='/'>
        <a>Logo</a>
      </Link>
      <Link href='/courses'>
        <a>수업</a>
      </Link>
      <Link href='/courses#package'>
        <a>패키지</a>
      </Link>
      <Link href='/questions'>
        <a>커뮤니티</a>
      </Link>
      <Link href='/reviews'>
        <a>수강후기</a>
      </Link>
    </nav>
  )
}

export default Nav