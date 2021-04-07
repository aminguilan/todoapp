const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "minwon",
    host: "localhost",
    port: 5432,
    database: "aminguilan_asabando"

});

module.exports = pool;