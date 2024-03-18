import { uploadImageToCloudinary_v2 } from '@/lib/image_upload'
import { convertRawFileToBase64 } from '@/lib/utils'
import { type DataProvider } from 'react-admin'

type TMainImage = {
  rawFile: File
  src: string
  title: string
}

type TCervejaData = {
  id?: number
  cervejariaId: number
  corpo?: string
  descriCerveja?: string
  harmonizacoesCerveja: string | string[] | undefined | null
  ingredientesCerveja: string | string[] | undefined | null
  mainImage: TMainImage | string
  nomeCerveja: string
  tempIdeal?: string
  teorAlcoolico?: number
  tipoCervejaId: number
  valorIBU?: number
}

export const cervejasCallbacks = {
  resource: 'cerveja',
  async beforeSave(data: TCervejaData, _dataProvider: DataProvider) {
    console.log('DATA RECEBIDO É: ', data)

    let image, arrIngredientes, arrHarmoniza

    if (typeof data.mainImage !== 'string') {
      const base64Image = await convertRawFileToBase64(data.mainImage)
      const uploadedImage = await uploadImageToCloudinary_v2(
        base64Image,
        'cervejas'
      )
      image = uploadedImage.secure_url
    } else image = data.mainImage

    if (typeof data.ingredientesCerveja === 'string') {
      arrIngredientes = data.ingredientesCerveja
        .split(',')
        .map((item) => item.toString())
    } else arrIngredientes = data.ingredientesCerveja

    if (typeof data.harmonizacoesCerveja === 'string') {
      arrHarmoniza = data.harmonizacoesCerveja
        .split(',')
        .map((item) => item.toString())
    } else arrHarmoniza = data.harmonizacoesCerveja

    const returningData = {
      ...data,
      mainImage: image,
      ingredientesCerveja: arrIngredientes,
      harmonizacoesCerveja: arrHarmoniza,
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return returningData
  },
}
