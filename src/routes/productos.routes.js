import {Router}  from "express"; /*PARA QUE NOSOTROS PODAMOS CREAR TODA UNA SECCIÓN DE RUTAS Y COLOCARLES UN NOMBRE*/
/*import {pool} from 'mysql2';*/
import { getProductos, getProducto} from "../controllers/productos.controllers.js";
import { postProductos } from "../controllers/productos.controllers.js";
import { putProductos } from "../controllers/productos.controllers.js";
import { deleteProductos } from "../controllers/productos.controllers.js";

const router = Router();

router.get('/productos', getProductos);
router.get ('/productos/:id', getProducto);

router.post('/productos', postProductos);

router.put('/productos/:id', putProductos);

router.delete('/productos/:id', deleteProductos);



export default router;