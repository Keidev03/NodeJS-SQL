import express from 'express';
import { getCreateUser, getHome, getListUser, getEditUser, postCreateUser, postUpdateUser, getDeleteUser } from '../controller/homeController';

const router = express.Router();

router.get('/', getHome);
router.get('/createUser', getCreateUser);
router.get('/listUser', getListUser);
router.get('/editUser/:id', getEditUser);
router.get('/deleteUser/:id', getDeleteUser);



router.post('/createUser', postCreateUser);
router.post('/updateUser', postUpdateUser);

export default router;