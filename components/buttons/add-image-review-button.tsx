"use client"

import { FaCamera, FaImage } from "react-icons/fa"

export const AddImageButton = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        // faz teu trampo ai andre kkkkkkkkk
    }

    return (
        <div className="flex gap-[1px] text-[#CCCCCC]">
            <button
                className="bg-[#2D2D2D] bg-opacity-65 rounded-l-lg flex items-center justify-center py-2 px-4"
            >
                <FaImage />
                <input
                    id="image-input"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                />
            </button>
            <button
                className="bg-[#2E2E2E] rounded-r-lg flex items-center justify-center py-2 px-4"
            >
                <FaCamera />
            </button>
        </div>
    )
}