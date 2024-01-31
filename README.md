# next-edge-crypto

`next-edge-crypto` is a JavaScript library crafted to provide sophisticated encryption and decryption functionalities using the WebCrypto API. This library is specially designed for edge runtime environments, such as those in Next.js or Vercel, serving as a contemporary alternative to Node.js's native crypto module.

## Features

- **WebCrypto API Utilization**: Employs the WebCrypto API for encryption and decryption, aligning with contemporary web standards.
- **Edge Runtime Optimization**: Tailored for peak performance in edge runtime environments.
- **Scalable Architecture**: Built with a vision to incorporate additional encryption algorithms and broaden functionalities in future updates.

## Installation

To integrate `next-edge-crypto` into your project, use the following command:

```bash
npm install next-edge-crypto
# or
yarn add next-edge-crypto

## Usage

To use the library, start by importing the necessary functions:

```ts
import { encrypt, decrypt } from 'next-edge-crypto';
```
or you can import like this:
```ts
import * as crypto from 'next-edge-crypto';
```

Then, you can use the functions as follows:

### Encryption
Encrypt your data as follows:

```ts
const encryptedData = await encrypt("your data here", "your base64 encoded key");
console.log(encryptedData); // Outputs encrypted data in hex format
```

### Decryption
Decrypt your data as follows:

```ts

const decryptedData = await decrypt("your encrypted data here", "your base64 encoded key");
console.log(decryptedData); // Outputs the original data
```

## API reference
- `encrypt(data: string, key: string): Promise<string>`: Encrypts the input string using the AES-CBC algorithm and returns the encrypted data in hex format.
- `decrypt(data: string, key: string): Promise<string>`: Decrypts the input string using the AES-CBC algorithm and returns the original data.

## Contributing
We welcome contributions to next-edge-crypto, particularly those that add new encryption algorithms and expand functionality. Feel free to fork the repository, apply your enhancements, and submit a pull request.

## License
This project is licensed under the MIT License. See [LICENSE](/LICENSE) for more details.