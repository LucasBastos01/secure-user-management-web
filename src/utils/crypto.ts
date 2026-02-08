import CryptoJS from 'crypto-js'

const SECRET_KEY = import.meta.env.VITE_CRYPTOJS_SECRETE_KEY

if (!SECRET_KEY) {
  throw new Error('VITE_CRYPTOJS_SECRETE_KEY não definida')
}

export function cryptoJsEncrypt<T>(data: T): string {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString()
}

export function cryptoJsDecrypt<T>(ciphertext: string | null): T | null {
  if (!ciphertext) return null

  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY)
    const decrypted = bytes.toString(CryptoJS.enc.Utf8)
    if (!decrypted) return null
    return JSON.parse(decrypted) as T
  } catch {
    return null
  }
}
