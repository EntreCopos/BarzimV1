import { FaCamera, FaImage } from 'react-icons/fa'

export const AddImageButton = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleImageStore = (e: React.ChangeEvent<HTMLInputElement>) => {
    // faz teu trampo ai andre kkkkkkkkk
  }

  return (
    <div className="flex gap-[1px] text-[#CCCCCC]">
      <button className="flex items-center justify-center rounded-l-lg bg-[#2D2D2D] bg-opacity-65 px-4 py-3">
        <FaImage />
        <input
          type="file"
          name='reviewPic'
          multiple
          accept="image/*"
          style={{ display: 'none' }}
        />
      </button>
      <button className="flex items-center justify-center rounded-r-lg bg-[#2E2E2E] px-4 py-2">
        <FaCamera />
      </button>
    </div>
  )
}
