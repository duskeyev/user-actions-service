const db = require('../db')


class userActionsController {
    async createAction(req,res) {
        const {userId,action} = req.body
        if (action == 'create'){
            const newAction = await db.query("insert into user_actions(user_id,created_at) values ($1,CURRENT_TIMESTAMP) returning *", [userId])
         
        res.json( newAction.rows[0] )
        }else{
            const newAction = await db.query("insert into user_actions(user_id,edited_at) values ($1,CURRENT_TIMESTAMP) returning *", [userId])
         
        res.json( newAction.rows[0] )
        }
        
        
    }
    async getActions(req,res) {
        const { userId, page } = req.query;
        //console.log(userId,page)
        const pageSize = 10;
        const offset = (page - 1) * pageSize || 0;

        try {
            const query =  'SELECT * FROM user_actions WHERE user_id = $1 ORDER BY edited_at DESC LIMIT $2 OFFSET $3'
             

            const params =   [userId, pageSize, offset]  
            const result = await db.query(query, params) 

            res.json(result.rows) 
        } catch (err) {
            res.status(500).json({ error: err.message }) 
        }
    }
 
     
    
     
     
     
}


module.exports = new userActionsController