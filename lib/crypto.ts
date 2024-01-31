// Utility function to convert ArrayBuffer to hex string
function bufferToHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

// Utility function to convert hex string to ArrayBuffer
function hexToBuffer(hexString: string) {
  const bytes = new Uint8Array(Math.ceil(hexString.length / 2))
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hexString.substr(i * 2, 2), 16)
  }
  return bytes.buffer
}

export const encrypt = async (data: string, KEY: string): Promise<string> => {
  const iv = crypto.getRandomValues(new Uint8Array(16))
  const key = await crypto.subtle.importKey(
    'raw',
    Buffer.from(KEY),
    'AES-CBC',
    false,
    ['encrypt']
  )

  const encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-CBC', iv: iv },
    key,
    new TextEncoder().encode(data)
  )

  // Manually concatenate the encrypted data and the IV
  const encryptedDataArray = new Uint8Array(encryptedData)
  const combinedArray = new Uint8Array(encryptedDataArray.length + iv.length)
  combinedArray.set(encryptedDataArray)
  combinedArray.set(iv, encryptedDataArray.length)

  return bufferToHex(combinedArray)
}

export const decrypt = async (data: string, KEY: string): Promise<string> => {
  const dataBuffer = hexToBuffer(data)
  const iv = dataBuffer.slice(-16)
  const encryptedData = dataBuffer.slice(0, -16)

  const key = await crypto.subtle.importKey(
    'raw',
    Buffer.from(KEY),
    'AES-CBC',
    false,
    ['decrypt']
  )

  const decryptedData = await crypto.subtle.decrypt(
    { name: 'AES-CBC', iv: new Uint8Array(iv) },
    key,
    Buffer.from(encryptedData)
  )

  return new TextDecoder().decode(decryptedData)
}
