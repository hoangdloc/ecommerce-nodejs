'use strict';

import { NextFunction, Request, Response } from 'express';

class AccessController {
  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('[P]::signUp::', req.body);
      res.status(200).json({
        code: 20001,
        message: 'Sign up successfully'
      });
    } catch (error) {
      return next(error);
    }
  };
}

export default new AccessController();
