module.exports = (sequelize, DataTypes) => {
  const Membership = sequelize.define('Membership', {
    role: DataTypes.STRING
  });
  return Membership;
};