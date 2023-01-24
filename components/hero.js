import Link from 'next/link'

export default function Hero () {
  return (
    <>
      <h1>codeprep</h1>
      <Link href='/pc1' legacyBehavior>
        <a>pc①</a>
      </Link>

      <p><Link href='/pc2' legacyBehavior>
        <a>pc2②</a>
         </Link>
      </p>

      <p><Link href='/pc3' legacyBehavior>
        <a>pc③</a>
         </Link>
      </p>

      <p><Link href='/pc4' legacyBehavior>
        <a>pc④</a>
         </Link>
      </p>

      <p><Link href='/pc5' legacyBehavior>
        <a>pc⑤</a>
         </Link>
      </p>

    </>

  )
}
