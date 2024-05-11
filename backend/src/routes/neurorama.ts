import { Router } from 'express';

import * as controllers from '../controllers/neurorama';

const router = Router();

router.post('/', controllers.create);

export default router;
