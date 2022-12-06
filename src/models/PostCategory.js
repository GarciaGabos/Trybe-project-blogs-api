module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
            postId: { 
                primaryKey: true, 
                type: DataTypes.INTEGER, 
                field: 'post_id', 
            },
            categoryId: { 
                primaryKey: true, 
                type: DataTypes.INTEGER, 
                field: 'category_id', 
            },
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });
    
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
          as: 'category', // as é: apelido de como esse relaiconamento vai ficar nos objetos quando usarmos eager loading pra esse relacionamento
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
        });
      };

    return PostCategory;
  };
