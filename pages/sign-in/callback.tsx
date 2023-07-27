import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function SignUpCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      await delay(3)
      router.push('/')
    })()
  }, [router])

  return <div>로그인 콜백</div>
}

const delay = async (n: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, n * 1000)
  })
}
