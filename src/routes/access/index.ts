'use strict';

import express from 'express';
import accessController from '~/controllers/access.controller';

const router = express.Router();

// Sign up
router.post('/shop/signup', accessController.signUp);

export default router;
