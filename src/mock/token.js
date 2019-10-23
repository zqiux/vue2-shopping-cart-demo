const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+`-='
const charsLen = chars.length
const tokenLen = 32

export default function getToken () {
  let token = ''
  for (let i = 0; i < tokenLen; i += 1) {
    token += chars[parseInt(Math.random() * charsLen, 10)]
  }
  return token
}
