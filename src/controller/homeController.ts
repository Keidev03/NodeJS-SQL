import { getAllUser, getUser, updateUser, postUser, deleteUser } from "../model/CRUD";

const getHome = (req, res): void => {
    return res.render('homePage.ejs');
};

const getCreateUser = (req, res): void => {
    return res.render('createUser.ejs');
};

const getListUser = async (req, res): Promise<void> => {
    const AllUser = await getAllUser();
    res.render('listUser.ejs', { AllUser });
};

const getEditUser = async (req, res): Promise<void> => {
    const userID: number = req.params.id;
    const OneUser = await getUser(userID);
    res.render('editUser.ejs', { userEdit: OneUser });
};

const getDeleteUser = async (req, res): Promise<void> => {
    const userID: number = req.params.id;
    await deleteUser(userID);
    res.redirect('/listUser');
}

const postCreateUser = async (req, res): Promise<void> => {
    let user = req.body;
    await postUser(user);
    res.redirect('/listUser');
};

const postUpdateUser = async (req, res): Promise<void> => {
    let user = req.body;
    await updateUser(user);
    res.redirect('/listUser');
}



export { postCreateUser, postUpdateUser };
export { getHome, getCreateUser, getListUser, getEditUser, getDeleteUser };