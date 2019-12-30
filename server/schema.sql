-- --For Best Results, define schema in the CLI an in this particular order so that no reference
-- --errors are thrown. Foreign Key structure is a mariadb requirement


-- DROP DATABASE nodela;

-- CREATE DATABASE nodela;

-- USE nodela;

-- CREATE TABLE user (
-- id INT NOT NULL AUTO_INCREMENT,
-- username VARCHAR(20) NOT NULL UNIQUE,
-- PRIMARY KEY (id)
-- )

-- CREATE TABLE hood(
--   id INT NOT NULL AUTO_INCREMENT,
--   up_dwn VARCHAR(10) NOT NULL,
--   hood_name VARCHAR(50) NOT NULL,
--   PRIMARY KEY (id)
-- )

-- CREATE TABLE post_type (
--   id INT NOT NULL AUTO_INCREMENT,
--   help_gen VARCHAR(20) NOT NULL,
--   PRIMARY KEY(id)
-- )

-- CREATE TABLE post (
--   id INT NOT NULL AUTO_INCREMENT,
--   post_id INT NOT NULL,
--   CONSTRAINT `post_id_ref` FOREIGN KEY (post_id) REFERENCES user (id) ON DELETE CASCADE ON UPDATE RESTRICT,
--   post_hood_id INT NOT NULL,
--   CONSTRAINT `post_hood_ref` FOREIGN KEY (post_hood_id) REFERENCES hood (id) ON DELETE CASCADE ON UPDATE RESTRICT,
--   post_type_id INT NOT NULL,
--   CONSTRAINT `post_type_id_ref` FOREIGN KEY (post_type_id) REFERENCES post_type (id) ON DELETE CASCADE ON UPDATE RESTRICT,
--   post_body VARCHAR(500) NOT NULL,
--   post_votes INT NOT NULL,
--   PRIMARY KEY (id)
-- )

-- CREATE TABLE comment(
--   id INT NOT NULL AUTO_INCREMENT,
--   user_comment_id INT NOT NULL,
--   CONSTRAINT `user_comment_id_reference` FOREIGN KEY (user_comment_id) REFERENCES user (id) ON DELETE CASCADE ON UPDATE RESTRICT,
--   post_comment_id INT NOT NULL,
--   CONSTRAINT `post_comment_id_reference` FOREIGN KEY (post_comment_id) REFERENCES post (id) ON DELETE CASCADE ON UPDATE RESTRICT,
--   comment_body VARCHAR(500) NOT NULL,
--   comment_votes INT NOT NULL,
--   PRIMARY KEY (id)
-- )


-- //User Table

-- // const User = sequelize.define('user', {
-- //   username: {
-- //     type: Sequelize.STRING,
-- //     allowNull: false,
-- //     unique: true
-- //   },
-- //   mainId: {
-- //     type: Sequelize.INTEGER,
-- //     allowNull: false,
-- //   }
-- // });


-- //Neighborhood Table
-- // const Hood = sequelize.define('hood', {
-- //   upOrDown: {
-- //     type: Sequelize.STRING,
-- //     allowNull: false,
-- //   },
-- //   hoodName: {
-- //     type: Sequelize.STRING,
-- //     allowNull: false
-- //   }
-- // });



-- // //Post Type Table
-- // const PostType = sequelize.define('post_type', {
-- //   helpOrGen: {
-- //     type: Sequelize.STRING,
-- //     allowNull: false,
-- //   }
-- // });



-- // //Post Table
-- // const Post = sequelize.define('post', {
-- //   postHoodId: {
-- //     type: Sequelize.INTEGER,
-- //     allowNull: false,
-- //     references: {
-- //       model: Hood,
-- //       key: 'id'
-- //     }
-- //   },
-- //   postTypeId: {
-- //     type: Sequelize.INTEGER,
-- //     allowNull: false,
-- //     unique: true
-- //   },
-- //   postBody: {
-- //     type: Sequelize.STRING,
-- //     allowNull: false,
-- //   },
-- //   postVotes: {
-- //     type: Sequelize.INTEGER,
-- //     allowNull: false
-- //   }
-- // });


-- //Comment Table

-- // const Comment = sequelize.define('comment', {
-- //   commentUserId: {
-- //     type: Sequelize.INTEGER,
-- //     allowNull: false,
-- //     references: {
-- //       model: User,
-- //       key: 'id'
-- //     }
-- //   },
-- //   commentPostId: {
-- //     type: Sequelize.INTEGER,
-- //     allowNull: false,
-- //     references: {
-- //       model: Post,
-- //       key: 'id'
-- //     }
-- //   },
-- //   commentBody: {
-- //     type: Sequelize.STRING,
-- //     allowNull: false,
-- //   },
-- //   commentVotes: {
-- //     type: Sequelize.INTEGER,
-- //     allowNull: false
-- //   }
-- // });


-- //Associations


