module.exports = (sequelize, type) => {
  return sequelize.define('hood', {
    upOrDown: {
      type: type.STRING,
      allowNull: false,
    },
    hoodName: {
      type: type.STRING,
      allowNull: false
    }
  });
};