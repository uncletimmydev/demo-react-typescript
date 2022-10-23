import { FC } from 'react'
import HomeContrainer from '../components/HomeContainer/HomeContainer'
import MySection from '../components/MySection/MySection'
import ListViewer from './../components/ListViewer/ListViewer'

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
        <ListViewer title='List number(default)'/>
        <ListViewer title='List string' list={['one', 'two', 'three', 'four', 'five', 'six']}/>
      </section>
    </>
  )
}

export default Home
