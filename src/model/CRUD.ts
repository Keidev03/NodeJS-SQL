import connection from "../database/connect";

interface User {
    id: number;
    email: string;
    name: string;
    city: string;
};

const getAllUser = async (): Promise<any> => {
    const [AllUser, fields]: [Array<any>, any] = await connection.query('SELECT * FROM Users');
    console.log("Service complete get AllUser: ", AllUser);
    return AllUser;
};

const getUser = async (userID: number): Promise<any> => {
    const [results, fields]: [Array<any>, any] = await connection.query(`SELECT * FROM Users WHERE id = ?`, [userID]);
    const OneUser = results && results.length > 0 ? results[0] : {};
    console.log("Service complete get User: ", OneUser);
    return OneUser;
};

const postUser = async (user: User): Promise<void> => {
    const { id, email, name, city } = user;
    const [results, fields]: [Array<any>, any] = await connection.query(`INSERT INTO Users(email, name, city) VALUES (?,?,?)`, [email, name, city]);
    console.log("Service complete post User: ", results);
};
const updateUser = async (user: User): Promise<void> => {
    const { id, email, name, city } = user;
    const [results, fields]: [Array<any>, any] = await connection.query(`UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, id]);
    console.log("Service complete update User: ", results);
};
const deleteUser = async (userID: number): Promise<void> => {
    const [results, fields]: [Array<any>, any] = await connection.query(`DELETE FROM Users WHERE Users.id = ?`, [userID]);
    console.log("Service complete delete User: ", results);
};

export { getAllUser, getUser, postUser, updateUser, deleteUser };