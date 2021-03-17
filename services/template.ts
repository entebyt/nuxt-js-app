import axios from 'axios'

/**
 *
 * @param userId
 * @param title
 * @param description
 */
export function update({ userId, title, description }: any) {
  return axios.patch(
    `https:///website-templator-default-rtdb.firebaseio.com/user/${userId}/template.json`,
    {
      title,
      description,
    }
  )
}
