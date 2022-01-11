const underscoredColumns = requireUtil("underscoredColumns");
const baseRepo = requireUtil("baseRepo");
const table = "logs";
const knex = requireKnex();

const create = async (payload) => {
  return await baseRepo.create(table, payload);
};

module.exports = {
  create,
};
