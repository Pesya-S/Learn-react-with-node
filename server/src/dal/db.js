

const {db: dbc,database} = require('./DbConnection');

const getTable = (tableName) => {
    return new Promise((resolve, reject) => {
        dbc.query(`select * from ${tableName}`, (err, rows) => {
            if (err) console.log(err);
            resolve(rows);
        });
    });
}

const query=(sql,params)=>{
    return new Promise(async(resolve,reject)=>{
        dbc.query(sql,params,(err,result)=>{
            if (err) console.log(err);
            resolve(result);
        })
    })
}



const insert = (tableName, object) => {
    return new Promise((resolve, reject) => {
        dbc.query(`insert into ${tableName} set ?`, object, (err, result) => {
            if (err) console.log(err);
            let id = result ? result.insertId : -1
            resolve(id);
        });
    });
}
const update = (tableName, object) => {
    return new Promise(async(resolve, reject) => {
        let primary = await getPrimary(tableName);

        const columns = Object.keys(object);
        const values = Object.values(object);
        let id = object[primary];
        let sql = `UPDATE ${tableName} SET ` + columns.join(" = ? ,") + " = ?" + ` where ${primary}=` + id;
        dbc.query(sql, values, (err, result) => {
            if (err) console.log(err);
            resolve(result);
        });
    });
}
const deleted=(nameTalbe,id)=>{
    return new Promise(async(resolve,reject)=>{
        let sql=`delete from ${nameTalbe} where id=${id}`;
        dbc.query(sql,(err,result)=>{
            if (err) console.log(err);
            resolve(result);
        })
    })
}


const getPrimary = (tableName) => {
    let query = `SELECT k.column_name as 'primary'
    FROM information_schema.table_constraints t
    JOIN information_schema.key_column_usage k
    USING(constraint_name,table_schema,table_name)
    WHERE t.constraint_type='PRIMARY KEY'
      AND t.table_schema='${database}'
      AND t.table_name='${tableName}';`;
    return new Promise((resolve, reject) => {
        dbc.query(query, (err, res) => {
            if (err) console.log(err);
            resolve(res && res[0] ? res[0].primary : null);
        })
    })
}

const getByPrimary = async (tableName, idValue) => {
        let primary = await getPrimary(tableName);
        return new Promise((resolve, reject) => {
            dbc.query(`select * from ${tableName} where ${primary}=?`, idValue, (err, rows) => {
                resolve(rows && rows[0] ? rows[0] : null);
            })
        })
    }


module.exports = {
    getTable, getByPrimary, insert, update,deleted,query
}


