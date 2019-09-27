import { JIKAN_API } from '../helpers/env'
import axios from 'axios'

export const apiGetSeasonLater = async () => {
  return axios({
    method: 'get',
    url: `${JIKAN_API}/season/later`
  })
    .then((res) => {
      const success = res.data
      return success
    })
    .catch((error) => {
      return error.data
    })
}

export const apiGetSeasonNow = async () => {
  return axios({
    method: 'get',
    url: `${JIKAN_API}/season`
  })
    .then((res) => {
      const success = res.data
      return success
    })
    .catch((error) => {
      return error.data
    })
}

export const apiGetSeasonByTime = async (params = {}) => {
  return axios({
    method: 'get',
    url: `${JIKAN_API}/season/${params.year}/${params.season}`
  })
    .then((res) => {
      const success = res.data
      return success
    })
    .catch((error) => {
      return error.data
    })
}
