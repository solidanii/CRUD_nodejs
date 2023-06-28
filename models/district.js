module.exports = (sequelize, DataTypes) => {
    const district = sequelize.define("district",{
        district_name:{ 
            type:DataTypes.STRING,
            allowNull: false
        }
    });
    return district;
};