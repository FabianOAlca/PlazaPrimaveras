<<<<<<< HEAD

=======
>>>>>>> 147df584d4a29f22baddc3744b8ba80770dbcd7f
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


<<<<<<< HEAD
module.exports = {Locales,Admin};

/* INSERT INTO locales (numLocal,name,description,contact,email,image,rent,pay_day,p_water,open,monday,tuesday,wednesday,thursday,friday,saturday,sunday) VALUES ('3''Planchalav','Lavanderia y tintoreria','3121567342','planchalav@gmail.com','../public/images/demo.jpg',50000,'1/mes',False,True,'8:00-21:00','8:00-21:00','8:00-21:00','8:00-21:00','8:00-21:00','8:00-21:00','8:00-21:00'); */
=======
module.exports = {Locales,Admin};
>>>>>>> 147df584d4a29f22baddc3744b8ba80770dbcd7f
