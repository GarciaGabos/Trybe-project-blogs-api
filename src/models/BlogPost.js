module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.DATE
      },
      updated: {
        type: DataTypes.DATE
      },
      userId: {
        type: DataTypes.STRING,
        field: 'user_id',
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
          { foreignKey: 'userId', as: 'user' });
      };
  
    return BlogPost;
  };