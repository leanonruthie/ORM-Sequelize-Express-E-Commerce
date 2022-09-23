const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagById) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(tagById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Category.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Work Reference 01-Activities/19-Ins_Instance-Method/routes/api/userRoutes.js
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTagById = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updateTagById) {
      res.status(404).json({ message: 'No Category with this id!' });
      return;
    }
    res.status(200).json(updateTagById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  // RUT-VIRT-FSF-PT-06-2022-U-LOLC/13-ORM/01-Activities/28-Stu_Mini-Project
  try {
    const deleteTagById = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteTagById) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(deleteTagById);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
