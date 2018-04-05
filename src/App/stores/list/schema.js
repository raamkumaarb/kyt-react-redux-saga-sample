import { Schema, arrayOf } from 'normalizr'

export const list = new Schema('list')
export const arrayOflist = arrayOf(list)
