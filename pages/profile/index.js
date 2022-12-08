import Image from 'next/image'

export default function ProfileDefault() {
  return (
    <div>
      <h1>자기소개</h1>
      <Image
        objectFit="contain"
        objectPosition="top right"
        src="/images/1.jpg"
        width={300}
        height={300}
      ></Image>
      <p> 이름 : 한유정 </p>
      <p> 나이 : 21세(만20세) </p>
      <p> 탄생일 : 2002년3월25일 양자리</p>
      <p>좋아하는 것 : 디지몬, 커비🌷</p>
    </div>
  )
}
