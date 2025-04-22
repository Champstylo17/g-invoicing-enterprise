module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    plan: DataTypes.STRING
  });
  return Organization;
};