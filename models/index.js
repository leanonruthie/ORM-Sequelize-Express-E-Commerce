// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Work Reference - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities/21-Ins_One-to-One

Product.hasOne(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
// Work Reference - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities/23-Ins_One-to-Many

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});

Tag.hasMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
