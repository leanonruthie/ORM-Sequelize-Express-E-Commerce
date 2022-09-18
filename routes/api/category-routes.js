const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // reference found in 01-Activities/07-Ins_Update-Delete
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // reference found in 01-Activities/07-Ins_Update-Delete
  Book.findOne(
    {
      // Gets the book based on the isbn given in the request parameters
      where: { 
        isbn: req.params.isbn 
      },
    }
  ).then((bookData) => {
    res.json(bookData);
  });
});

router.post('/', (req, res) => {
  // create a new category
  // reference found in 01-Activities/07-Ins_Update-Delete
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '9780674729018',
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '9780137043293',
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title:
        "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '9780807047415',
      pages: 192,
      edition: 2,
      is_paperback: true,
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '9780135957059',
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '9780201896831',
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '9781479837243',
      pages: 256,
      edition: 1,
      is_paperback: true,
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
// Calls the update method on the Book model
// reference found in 01-Activities/07-Ins_Update-Delete
Book.update(
  {
    // All the fields you can update and the data attached to the request body.
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    pages: req.body.pages,
    edition: req.body.edition,
    is_paperback: req.body.is_paperback,
  },
  {
    // Gets the books based on the isbn given in the request parameters
    where: {
      isbn: req.params.isbn,
    },
  }
)
  .then((updatedBook) => {
    // Sends the updated book as a json response
    res.json(updatedBook);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // reference found in 01-Activities/07-Ins_Update-Delete
  Book.destroy({
    where: {
      isbn: req.params.isbn,
    },
  })
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
