import { useRouter } from 'next/router'
export default function Profile() {
  const router = useRouter()
  const { username } = router.query
  return (
    <div>
      <h1>Hello yoojeong{username}!</h1> <p> Dynamic routing </p>
    </div>
  )
}
