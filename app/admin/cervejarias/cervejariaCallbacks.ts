import { uploadImageToCloudinary_v2 } from '@/lib/image_upload'
import { convertRawFileToBase64 } from '@/lib/utils'
import { type DataProvider } from 'react-admin'

export const cervejariaCallbacks = {
  resource: 'cervejaria',
  async beforeSave(data: any, _dataProvider: DataProvider) {
    const base64Image = await convertRawFileToBase64(data.logo)
    const image = await uploadImageToCloudinary_v2(
      base64Image,
      'logos-cervejarias'
    )

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return {
      ...data,
      logo: image.secure_url,
    }
  },
}
