/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FaCamera, FaImage } from 'react-icons/fa'

export const AddImageButton = ({handler}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleImageStore = (e: React.ChangeEvent<HTMLInputElement>) => {
    // faz teu trampo ai andre kkkkkkkkk
  }

  return (
    <div className="flex text-[#CCCCCC] relative overflow-hidden">
      <button className="relative flex items-center justify-center rounded-l-lg bg-[#2D2D2D] bg-opacity-65 px-4 py-3">
        <FaImage />
        <input
          style={{fontSize: '100px', position: 'absolute', left: 0, top: 0, opacity: 0}}
          type="file"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          onChange={handler}
          accept="image/*"
        />
      </button>
      <button className="flex items-center justify-center rounded-r-lg bg-[#2E2E2E] px-4 py-2">
        <FaCamera />
      </button>
    </div>
  )
}
