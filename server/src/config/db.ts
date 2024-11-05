import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';

dotenv.config()
const db = new Sequelize('postgresql://chatRealtime_gategoose:51a03c351374cf143ccac8c11388786a6924ee2b@98uim.h.filess.io:5433/chatRealtime_gategoose',{
    models: [__dirname + '/../models/**/*.ts'],
    schema: 'my_custom_schema'
})
export default db