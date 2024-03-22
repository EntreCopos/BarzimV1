'use server'
export const callEdenAiTextModerationAPI = async (text: string) => {
  const res = await fetch('https://api.edenai.run/v2/text/moderation', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.EDEN_AI_KEY,
    },
    body: JSON.stringify({
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      language: 'pt',
      text: text,
      providers: 'openai',
    }),
  })

  const data = await res.json()

  const isAllowed = data.openai.nsfw_likelihood_score < 0.5
  const isFlagged =
    data.openai.nsfw_likelihood_score > 0.2 || data.openai.nsfw_likelihood > 1

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    isFlagged,
    isAllowed,
    data,
  }
}
