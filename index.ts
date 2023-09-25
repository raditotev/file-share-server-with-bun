import crypto from 'crypto'

const SECRET = crypto.randomBytes(32).toString('hex')
const IP = Bun.env.IP || 'Change with your ISP IP (Step one in README.md)'

Bun.serve({
  fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === '/') return new Response('Hi')
    if (url.pathname.includes(SECRET)) {
      const filename = url.pathname.replace(`/${SECRET}/`, '')
      const file = Bun.file('./files/' + filename)
      return new Response(file)
    }
    return new Response('404!')
  },
})

console.log(`
  Link to file you want ot share will be:
  http://${IP}:${Bun.env.PORT}/${SECRET}/full-name-of-file-you-want-to-share-including.extension\n
  Make sure file is in ./files folder
`)
