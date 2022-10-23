import { FC } from 'react'
interface YoloProps {
    title: string;
    subTitle?: string;
}

const Yolo: FC<YoloProps> = ({title, subTitle}) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    </>
  )
}

export default Yolo
