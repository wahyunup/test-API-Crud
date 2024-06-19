import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const products = db.define('product',{
    name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    url: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0,
    },
},{
    freezeTableName: true
});

export default products;

(async ()=> {
    await db.sync();
})();