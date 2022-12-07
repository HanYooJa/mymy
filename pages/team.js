import Image from 'next/Image'

export default function team() {
  return (
    <div>
      <h1>양노임한</h1>
      <p> 팀원 소개</p>
      <Image
        objectFit="contain"
        objectPosition="top right"
        src="/images/5.jpg"
        width={750}
        height={500}
      ></Image>
      <p>노수빈 임혜준 한유정 양유나</p>
      <a href="https://book-livid-eight.vercel.app/">
        팀프로젝트 : GO! (누르면 들어가져요 「( ・∇・)「💛)
      </a>
    </div>
  )
}
