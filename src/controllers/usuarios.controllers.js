import { pool } from "../../db/db.js";

/*función para traer los usuarios: GET*/
export const getUsuarios = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Usuarios');
  res.json(rows);
}

/*funcion para devolver un solo usuario*/
export const getUser = async (req, res) =>{
    const [rows] = await pool.query('SELECT * FROM Usuarios WHERE idUsuario = ?', [req.params.id])
     if (rows.length <=0) return res.status(404).json({message: 'Usuario no encontrado'}) /*esto es para que cuando se ponga el id de un usuario que no exista*/
    res.json(rows[0])
}

/*función para añadir un usuario: POST*/
export const postUsuarios = async (req, res) => {
 const {idUsuario, nombre, contraseña, tipoUsuario} = req.body;
 const [rows] = await pool.query('INSERT INTO Usuarios (nombre, contraseña, tipoUsuario) VALUES (?, ?, ?)', [nombre, contraseña, tipoUsuario])
 /*body es lo que el cliente me envía*/
res.send({
    id: rows.insertId,
    nombre,
    contraseña,
    tipoUsuario,
 })
};

/*función para editar un usuario: PUT*/
export const putUsuarios = async (req, res) => {
    const {id} = req.params
    const {nombre, contraseña, tipoUsuario} = req.body;
    const [result] = await pool.query('UPDATE Usuarios SET nombre = ?, contraseña = ?, tipoUsuario = ? WHERE idUsuario = ?', [nombre, contraseña, tipoUsuario, id]);
    if(result.affectedRows === 0) return res.status(404).json({message: 'Usuario no encontrado'})
    const [rows] = await pool.query('SELECT * FROM Usuarios WHERE idUsuario = ?', [id])
    res.json(rows);
    /*Se puede usar patch para hacer que solamente un dato se actualice, aquí con la función ifNull(?)*/
}

/*función para eliminar un usuario: DELETE*/
export const deleteUsuarios = async (req, res) =>{
const [result] = await pool.query('DELETE FROM Usuarios WHERE idUsuario = ?', [req.params.id]);
 if (result.affectedRows <= 0) return res.status(404).json({message: 'Usuario no encontrado'}) /*lo mismo que la anterior condición*/
console.log(result);
res.sendStatus(204);
}