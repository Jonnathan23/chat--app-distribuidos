import { Router } from "express";

const router = Router()
let route = process.cwd().replace('server','cliente')

router.get('/', (req, res) => {    
    //res.sendFile(route + '/index.html')
})

export default router