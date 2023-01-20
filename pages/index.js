import Link from 'next/link'
export default function Home () {
  return (
    <>
      <Link href='/sample' legacyBehavior>
        <a> Sample Website  </a>
      </Link>

      <Link href='/sample2' legacyBehavior>
        <a> page </a>
      </Link>

      <Link href='/sample3' legacyBehavior>
        <a>ブログ記事一覧 </a>
      </Link>

      <Link href='/sample4' legacyBehavior>
        <a> 三段記事の一覧 </a>
      </Link>

      <Link href='/sample5' legacyBehavior>
        <a> グリッドレイアウト </a>
      </Link>

    </>
  )
}
