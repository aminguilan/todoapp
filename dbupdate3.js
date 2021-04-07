const pool = require ("./db");

const sql = 'UPDATE public.assignment SET cat_id = $1 WHERE todo_id = 4 RETURNING *';
const data = [3];

pool.query(sql,data,(err,res)=>{

    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows[0]);
    }

});

pool.end();