import { FC } from 'react'
import { homeContrainerStyle } from './HomeContainerStyle'

interface HomeContrainerProps {
  content: string
}

const HomeContrainer: FC<HomeContrainerProps> = ({ content }) => {
  return (
    <>
      <div style={homeContrainerStyle}>
        <p>Home content: {content}</p>
      </div>
    </>
  )
}

export default HomeContrainer
