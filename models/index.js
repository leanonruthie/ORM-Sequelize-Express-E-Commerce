// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// WORK REFERENCE - basically all activities inside - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities - indicate below
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // added by askBCS since my I was receiving foreign key constraint errors and now everything is fine
  onDelete: 'CASCADE',
});

// Categories have many Products
// WORK REFERENCE - basically all activities inside - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities - indicate below
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
// WORK REFERENCE - basically all activities inside - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities - indicate below
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys

  // Below disabled items do not work smoothly for any "through" usage in api product-routes and tag-routes

  // through: {
  //   model: ProductTag,
  //   unique: false
  // },
  // Define an alias for when data is retrieved
  // as: 'ProductTag_Product'

  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
// WORK REFERENCE - basically all activities inside - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities - indicate below
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys

  // Below disabled items do not work smoothly for any "through" usage in api product-routes and tag-routes

  // through: {
  //   model: ProductTag,
  //   unique: false
  // },
  // // Define an alias for when data is retrieved
  // as: 'ProductTag_Tag'

  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
