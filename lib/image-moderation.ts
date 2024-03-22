'use server'

export const callModerateContentImageAPI = async (
  image: string,
  isBase64?: boolean
) => {
  const url = 'https://api.moderatecontent.com/moderate/'
  const formData = new FormData()
  formData.append('key', process.env.MODERATE_CONTENT_KEY as string)
  formData.append('base64', (isBase64 || true).toString())
  formData.append('url', image)

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Erro ao moderar imagem')
    }

    const data = await response.json()

    const {
      //rating_index,
      //rating_letter,
      rating_label,
      predictions,
    } = data

    return {
      allowed: rating_label !== 'adult',
      predictions,
    }
  } catch (error) {
    console.error('Erro:', error)
    return {
      error,
    }
  }
}
