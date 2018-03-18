import Promise from 'bluebird';

/**
 * Asynchronously saves a modified waterline instance to the database
 *
 * @param {object} instance - Waterline model instance
 * @returns {Promise} Promise resolves waterline model instance
 */
export async function save(instance) {
  return new Promise((resolve, reject) => {
    instance.save(err => {
      if (err) return reject(err);
      return resolve(instance);
    });
  });
}

export default { save };
