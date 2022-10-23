import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './ListViewer.scss'
interface ListViewerProps {
  title: string;
  list?: Array<number | string>
}

const ListViewer: FC<ListViewerProps> = ({title, list}) => {
  list = list ? list : [1, 2, 3, 4, 5]
  const listItems = list.map(item => {
    return <li>{item}. -------------------------{'>'} {uuidv4()}</li>
  })
  return (
    <>
      <h2 className='title'>{title}</h2>
      <ul className="list-viewer">
        {listItems}
      </ul>
    </>
  )
}

export default ListViewer
