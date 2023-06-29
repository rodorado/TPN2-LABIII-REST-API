import {Router}  from "express"; /*PARA QUE NOSOTROS PODAMOS CREAR TODA UNA SECCIÓN DE RUTAS Y COLOCARLES UN NOMBRE*/
import {getUsuarios, getUser} from '../controllers/usuarios.controllers.js';
import { postUsuarios } from "../controllers/usuarios.controllers.js";
import { putUsuarios } from "../controllers/usuarios.controllers.js";
import { deleteUsuarios } from "../controllers/usuarios.controllers.js";

const router = Router();


router.get('/usuarios', getUsuarios);
/*para traer un solo usuario*/
router.get('/usuarios/:id', getUser);

router.post('/usuarios', postUsuarios);

router.put('/usuarios/:id', putUsuarios);

router.delete('/usuarios/:id', deleteUsuarios);



export default router;