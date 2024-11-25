'use strict';

import express, { Request, Response } from 'express';
import access from './access';

const router = express.Router();

router.use('/v1/api', access);
// router.get('/', (_req: Request, res: Response) => {
//   res.status(200).json({
//     message: 'Welcome to the API'
//   });
// });

export default router;
