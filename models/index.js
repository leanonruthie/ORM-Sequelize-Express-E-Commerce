// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// WORK REFERENCE - basically all activities inside - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities - indicate below
Product.belongsTo(Category, {
  foreignKey: 'category_id',
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
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: '???'
});

// Tags belongToMany Products (through ProductTag)
// WORK REFERENCE - basically all activities inside - RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities - indicate below
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: '???'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
