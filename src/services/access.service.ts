'use strict';

import bcrypt from 'bcrypt';
import crypto from 'crypto';

import shopModel from '~/models/shop.model';
import { RoleShop, SignUpDTO } from '~/types';

class AccessService {
  static signUp = async ({ name, email, password }: SignUpDTO) => {
    try {
      const holderShop = await shopModel.findOne({ email }).lean();
      if (holderShop)
        return {
          code: 'xxxx',
          message: 'Shop already registered!'
        };

      const passwordHash = await bcrypt.hash(password, 10);

      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [RoleShop.SHOP]
      });

      if (newShop) {
        // Created privateKey, publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096
        });

        console.log({ privateKey, publicKey }); // save collection KeyStore
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          code: 'xxx',
          message: error.message,
          status: 'error'
        };
      }
    }
  };
}

export default AccessService;
