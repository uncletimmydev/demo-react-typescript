import { FC } from 'react'
import { mySectionStyle } from './MySectionStyle'
interface MySectionProps {
  content?: string
}

const MySection: FC<MySectionProps> = ({ content }) => {
  return (
    <>
      <div style={mySectionStyle}>
        <p>Section content: {content ? content : ''}</p>
      </div>
    </>
  )
}

export default MySection
