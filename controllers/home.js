/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('pages/index.twig', {
    title: 'Home'
  });
};
