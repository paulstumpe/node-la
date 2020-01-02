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
    commentPostId: {
      type: type.INTEGER,
      allowNull: false,
      // references: {
      //   model: Post,
      //   key: 'id'
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