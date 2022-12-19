import axios from 'axios'

const url = 'http://localhost:4000/contact'

export const createMessage = (newMessages) => axios.post(url, newMessages)