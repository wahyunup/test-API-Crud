import { Sequelize } from "sequelize";
import db from "../config/database.js";
const {DataTypes} = Sequelize;
const product = db.define('product',{
    name: DataTypes.string,
    image: DataTypes.string,
    url: DataTypes.string
},{
    freezeTableName: true
});

export default product;

(async ()=> {
    await db.sync();
})();