import { FC } from 'react'
import './MySection.scss'
interface MySectionProps {
  content?: string
}

const MySection: FC<MySectionProps> = ({ content }) => {
  return (
    <>
      <div className='my-section-style'>
        <p>Section content: {content ? content : ''}</p>
      </div>
    </>
  )
}

export default MySection
