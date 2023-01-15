import { getUser,getUserById} from "../controllers/userController";
import express from 'express'
const router = express.Router()

// express router method to create route for getting all users



router.route('/').get(getUser);

router.route('/:id').get(getUserById);

export default router;

