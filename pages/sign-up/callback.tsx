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

  return (
    <div>
      회원가입 콜백 콜백 페이지에 있는동안 로딩 페이지를 보내주고, 회원가입으로
      넘어가면 좋을 것 같아요
    </div>
  )
}

const delay = async (n: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, n * 1000)
  })
}
