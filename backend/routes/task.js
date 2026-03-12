const { Router } = require('express');
const router = Router();
const {handleAddTasks,handleGetTasks}=require("../controllers/task")

router.get('/app',handleGetTasks)
// router.post('/',)
// router.put('/:id',)
// router.delete('/:id',)
// router.patch('/:id',)


module.exports = router;