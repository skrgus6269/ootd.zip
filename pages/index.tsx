import Head from 'next/head'
import { useEffect } from 'react'
import useNewUser from '@/hooks/useNewUser'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [newUser] = useNewUser()

  useEffect(() => {
    if (typeof window !== undefined && newUser) {
      router.replace('/onboarding')
    }
  })

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <h2>메인 홈</h2>
    </>
  )
}
