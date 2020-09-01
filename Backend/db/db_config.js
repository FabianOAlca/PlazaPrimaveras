const { Sequelize, DataTypes} = require ('sequelize');

const sequelize = new Sequelize('postgres://admin:admin@localhost:5432/primavera')

const Locales = sequelize.define('locales',{

    numLocal:DataTypes.TEXT,
    name: DataTypes.TEXT,    
    description: DataTypes.TEXT,
    contact: DataTypes.TEXT,
    email: DataTypes.TEXT,
    image: DataTypes.TEXT,
    rent: DataTypes.INTEGER,
    pay_day: DataTypes.TEXT,
    p_water: DataTypes.BOOLEAN,
    open: DataTypes.BOOLEAN,
    monday: DataTypes.TEXT,
    tuesday: DataTypes.TEXT,
    wednesday: DataTypes.TEXT,
    thursday: DataTypes.TEXT,
    friday: DataTypes.TEXT,
    saturday : DataTypes.TEXT,
    sunday: DataTypes.TEXT
    },{
    timestamps:false
});

const Admin = sequelize.define('admin',{
    
    user_name : DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT
    },{
    timestamps: false 
});


(async()=>{
    await sequelize.sync({force:false});
})();


module.exports = {Locales,Admin};