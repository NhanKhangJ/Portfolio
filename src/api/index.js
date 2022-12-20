import axios from 'axios'

const url = ' https://long-garb-cod.cyclic.app/contact'

export const createMessage = (newMessages) => axios.post(url, newMessages)