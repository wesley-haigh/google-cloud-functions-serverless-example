const USERS = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Williams'
  }
];

/**
 * Get Users.
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
const getUsers = (req, res) => {
  res.status(200).send(USERS);
};

/**
 * Get Users.
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
const getUser = (req, res) => {
  res.status(200).send(USERS.find(user => user.id === parseInt(req.query.id)));
};

module.exports = {
  getUsers,
  getUser
};
