import { createHashHistory } from 'history'
import Api from './api'

export const api = new Api({
  host: 'http://77.120.241.80:8811',
})

export const history = createHashHistory()
