const dotenv = require('dotenv').config({path:'dev.env'});
let CONFIG = {}

CONFIG.jwt_token                          = process.env.JWT_TOKEN
CONFIG.db_name                            = process.env.DB_NAME
CONFIG.db_user                            = process.env.DB_USER
CONFIG.db_host                            = process.env.DB_HOST
CONFIG.db_password                        = process.env.DB_PASSWORD
module.exports.CONFIG = CONFIG
global.CONFIG = CONFIG