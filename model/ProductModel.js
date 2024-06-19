import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const products = db.define('product',{
    name: DataTypes.string,
    image: DataTypes.string,
    url: DataTypes.string
},{
    freezeTableName: true
});

export default products;

(async ()=> {
    await db.sync();
})();