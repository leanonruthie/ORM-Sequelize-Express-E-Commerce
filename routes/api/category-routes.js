const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities/28-Stu_Mini-Project
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities/28-Stu_Mini-Project
  try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryById) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  // RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities/28-Stu_Mini-Project
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Work Reference 01-Activities/19-Ins_Instance-Method/routes/api/userRoutes.js
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategoryById = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updateCategoryById) {
      res.status(404).json({ message: 'No Category with this id!' });
      return;
    }
    res.status(200).json(updateCategoryById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities/28-Stu_Mini-Project
  try {
    const deleteCategoryById = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteCategoryById) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(deleteCategoryById);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
