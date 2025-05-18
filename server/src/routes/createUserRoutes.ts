// import express from 'express';
// import { createUser } from '../controllers/createUser';

// const router = express.Router();

// router.post('/', createUser);

// export default router;


// import express, { Router } from 'express';
// import { createUserControllers } from '../controllers/createUserControllers';

// const router: Router = express.Router();

// router.post('/', createUserControllers);

// export default router;


// import express, { Router } from 'express';
// import { createUserControllers } from '../controllers/createUserControllers';

// const router: Router = express.Router();

// // Explicitly type the route handler
// router.post('/', (req: express.Request, res: express.Response) => {
//   return createUserControllers(req, res);
// });

// export default router;

import express from 'express';
import { createUserControllers } from '../controllers/createUserControllers';

const router = express.Router();
router.post('/', createUserControllers);
export default router;