import { FC } from 'react'
import './HomeContainer.scss'

interface HomeContrainerProps {
  content: string
}

const HomeContrainer: FC<HomeContrainerProps> = ({ content }) => {
  return (
    <>
      <div className='home-content'>
        <p>Home content: {content}</p>
      </div>
    </>
  )
}

export default HomeContrainer
