import { FC } from 'react'
import HomeContrainer from '../components/HomeContainer/HomeContainer'
import MySection from '../components/MySection/MySection'

interface HomeProps {
  title: string
  subTitle: string
  content?: string
}

const Home: FC<HomeProps> = ({ title, subTitle, content }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{content ? content : ''}</p>
      <section>
        <HomeContrainer content="This is contrainer" />
        <MySection content="hello this is content" />
      </section>
    </>
  )
}

export default Home
