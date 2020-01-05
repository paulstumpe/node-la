/*
Sequelize utilizes models to define tables in a database, each model is constructed, given associations
(foreign keys) if needed, then synced after the database connection is established
*/
module.exports = (sequelize, type) => {
  return sequelize.define('comment', {
    // commentUserId: {
    //   type: type.INTEGER,
    //   references: {
    //     model: User,
    //     key: 'id'
    //   }
    // },
    commentPostId: {
      type: type.INTEGER,
      // references: {
      //   model: Post,
      //   key: 'id'
      // }
      //allowNull: false,
    },
    // commentUserName: {
    //   type:type.STRING,
    //   allowNull: false
    // },
    // commentPostId
    commentBody: {
      type: type.STRING,
      allowNull: false
    },
    commentVotes: {
      type: type.INTEGER,
      allowNull: false
    }
  });
};