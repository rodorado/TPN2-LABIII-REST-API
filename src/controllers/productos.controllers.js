import { pool } from "../../db/db.js";

/*función para traer los productos: GET*/
export const getProductos = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Productos');
  res.json(rows);
}

/*funcion para devolver un solo producto*/
export const getProducto = async (req, res) =>{
    const [rows] = await pool.query('SELECT * FROM Productos WHERE idProducto = ?', [req.params.id])
     if (rows.length <=0) return res.status(404).json({message: 'Producto no encontrado'}) /*esto es para que cuando se ponga el id de un producto que no exista*/
    res.json(rows[0])
}

/*función para añadir un producto: POST*/
export const postProductos = async (req, res) => {
 const {name, description, price, discount} = req.body;
 const [rows] = await pool.query('INSERT INTO Productos (name, description, price, discount) VALUES (?, ?, ?, ?)', [name, description, price, discount])
 /*body es lo que el cliente me envía*/
res.send({
    id: rows.insertId,
    name,
    description,
    price,
    discount,
 })
};

/*función para editar un producto: PUT*/
export const putProductos = async (req, res) => {
    const {id} = req.params
    const {name, description, price, discount} = req.body;
    const [result] = await pool.query('UPDATE Productos SET name= ?, description = ?, price = ?, discount = ? WHERE idProducto = ?', [name, description, price, discount, id]);
    if(result.affectedRows === 0) return res.status(404).json({message: 'Producto no encontrado'})
    const [rows] = await pool.query('SELECT * FROM Productos WHERE idProducto = ?', [id])
    res.json(rows);
    /*Se puede usar patch para hacer que solamente un dato se actualice, aquí con la función ifNull(?)*/
}

/*función para eliminar un producto: DELETE*/
export const deleteProductos = async (req, res) =>{
const [result] = await pool.query('DELETE FROM Productos WHERE idProducto = ?', [req.params.id]);
 if (result.affectedRows <= 0) return res.status(404).json({message: 'Producto no encontrado'}) /*lo mismo que la anterior condición*/
console.log(result);
res.sendStatus(204);
}

