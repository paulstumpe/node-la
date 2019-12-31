module.exports = (sequelize, type) => {
  return sequelize.define('post_type', {
    helpOrGen: {
      type: type.STRING,
      allowNull: false,
    }
  });
};