import axios from 'axios'
const key = 'AIzaSyCUkSkp622YD3aobBiD1GHutvf8LDLt34A'
/**
 *
 * @param email
 * @param password
 * @param axios
 */
export function signup(email: string, password: string) {
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
    { email, password }
  )
}
export function login(email: string, password: string) {
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
    { email, password }
  )
}
