import Image from 'next/image'

export default function team() {
  return (
    <div>
      <h1>양노임한</h1>
      <p> 팀원 소개</p>
      <Image
        objectFit="contain"
        objectPosition="top right"
        src="/images/yang.jpg"
        width={750}
        height={500}
      ></Image>
      <p>노수빈 임혜준 한유정 양유나</p>
      <p>팀 프로젝트 주제 : 우리만의 책사이트 만들기</p>
      <p>
        팀 프로젝트 소개 : 팀원 개인이 추천하고자 하는 책을 게시 후 리뷰
        작성하는 곳에 들어가, 팀원이 작성한 리뷰를 볼 수 있으며 이 사이트를
        방문한 사람 또한 리뷰를 작성할 수 있게 했습니다
      </p>
      <a href="https://book-livid-eight.vercel.app/">
        팀프로젝트 : GO! (누르면 들어가져요 「( ・∇・)「💛)
      </a>
    </div>
  )
}
