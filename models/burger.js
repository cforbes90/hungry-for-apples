module.exports = funciton (sequelize, DataTypes) {
    const burger = sequelize.define ("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    })
    return Burger;

};