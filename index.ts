import { Router } from '@stricjs/router'
import { dir } from '@stricjs/utils'
import crypto from 'crypto'

const SECRET = crypto.randomBytes(32).toString('hex')
const IP = Bun.env.IP || 'Change with your ISP IP (Step one in README.md)'

export default new Router()
  .get('/', () => new Response('Hi'))
  .get(`/${SECRET}/*`, dir('./files'))

console.log(`
  Link to file you want ot share will be:
  http://${IP}:${Bun.env.PORT}/${SECRET}/full-name-of-file-you-want-to-share-including.extension\n
  Make sure file is in ./files folder
`)
