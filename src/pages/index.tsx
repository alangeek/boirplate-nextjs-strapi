import Image from 'next/image'

import vercelImg from '~public/vercel.svg'
import { Text } from "components/Teste"

export default function Home() {
  return (
    <div>
      <Text />
      <Image src={vercelImg} width={283} height={64} alt="Vercel image" />
    </div>
    )
}
