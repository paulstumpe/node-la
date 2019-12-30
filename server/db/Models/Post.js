module.exports = (sequelize, type) => {
  return sequelize.define('post', {
    postHoodId: {
      type: type.INTEGER,
      allowNull: false,
      // references: {
      //   model: Hood,
      //   key: 'id'
      // }
    },
    postTypeId: {
      type: type.INTEGER,
      allowNull: false,
      unique: true
    },
    postBody: {
      type: type.STRING,
      allowNull: false,
    },
    postVotes: {
      type: type.INTEGER,
      allowNull: false
    }
  });
};