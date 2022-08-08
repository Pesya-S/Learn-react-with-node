

const db = require('./db');

const getTable = (nameTable) => {
    return new Promise((resolve, reject) => {
        db.query(`select * from ${nameTable}`, (err, rows) => {
            if (err) console.log(err);
            resolve(rows);
        });
    });
}

const getPrimary = (nameTable) => {
    let query = `SELECT k.column_name as 'primary'
    FROM information_schema.table_constraints t
    JOIN information_schema.key_column_usage k
    USING(constraint_name,table_schema,table_name)
    WHERE t.constraint_type='PRIMARY KEY'
      AND t.table_schema='${configs[i].database}'
      AND t.table_name='${nameTable}';`;
    return new Promise((resolve, reject) => {
        con.query(query, (err, res) => {
            if (err) console.log(err);
            resolve(res && res[0] ? res[0].primary : null);
        })
    })
}

const getByPrimary = async (nameTable, idValue) => {
        let primary = await _getPrimary(nameTable);
        return new Promise((resolve, reject) => {
            con.query(`select * from ${nameTable} where ${primary}=?`, idValue, (err, rows) => {
                resolve(rows && rows[0] ? rows[0] : null);
            })
        })
    }


const insert = (nameTable, object) => {
    return new Promise((resolve, reject) => {
        db.query(`insert into ${nameTable} set ?`, object, (err, result) => {
            if (err) console.log(err);
            let id = result ? result.insertId : -1
            resolve(id);
        });
    });
}
const update = (nameTable, object, cb) => {
    return new Promise(async(resolve, reject) => {
        let primary = await _getPrimary(nameTable);

        const columns = Object.keys(object);
        const values = Object.values(object);
        let id = object[primary];
        let sql = `UPDATE ${nameTable} SET ` + columns.join(" = ? ,") + " = ?" + ` where ${primary}=` + id;
        db.query(sql, values, (err, result) => {
            if (err) console.log(err);
            resolve(result);
        });

    });
}

module.exports = {
    getTable, getByPrimary, getPrimary, insert, update
}


