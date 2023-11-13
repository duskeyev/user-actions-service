const Router = require('express') 
const router = new Router()
 
const userActionsController = require('../controllers/usersActions.controller')


router.post('/user-actions',userActionsController.createAction)

router.get('/user-actions',userActionsController.getActions)

 



module.exports = router