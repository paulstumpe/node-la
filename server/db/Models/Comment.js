module.exports = (sequelize, type) => {
  return sequelize.define('comment', {
    commentUserId: {
      type: type.INTEGER,
      allowNull: false,
      // references: {
      //   model: User,
      //   key: 'id'select * from posts;
      // }
    },
    commentBody: {
      type: type.STRING,
      allowNull: false,
    },
    commentVotes: {
      type: type.INTEGER,
      allowNull: false
    }
  });
};