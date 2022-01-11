const knex = require("../knex");

const addCreatedTimestamps = (payload) => {
  payload["created_at"] = new Date().toISOString();
  payload["updated_at"] = new Date().toISOString();
  return payload;
};

const create = async (table, payload) => {
  try {
    payload = addCreatedTimestamps(payload);
    let result = await knex.transaction(async (trx) => {
      const rows = await trx(table).insert(payload).returning("*");
      return rows[0];
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const update = async (table, where, payload) => {
  try {
    payload["updated_at"] = new Date().toISOString();
    let rows = await knex(table).where(where).update(payload).returning("*");
    return rows[0];
  } catch (error) {
    throw error;
  }
};

const remove = async (table, where, mode = "soft") => {
  try {
    if (mode === "soft") {
      let row = await knex(table).where(where).update({
        deleted_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      return row;
    }

    if (mode === "hard") {
      let rows = await knex(table)
        .where(where)
        .whereNull("deleted_at")
        .delete();
      return rows;
    }
  } catch (error) {
    throw error;
  }
};

const first = async (table, where = {}) => {
  try {
    let row = await knex(table).where(where).whereNull("deleted_at").first();
    return row;
  } catch (error) {
    throw error;
  }
};

const countAll = async (table, where = {}, whereNot = {}) => {
  try {
    let rows = await knex(table)
      .where(where)
      .whereNot(whereNot)
      .whereNull("deleted_at")
      .count({ count: "*" })
      .first();
    return parseInt(rows.count);
  } catch (error) {
    throw error;
  }
};

const findAll = async (table, where = {}, columns) => {
  try {
    let rows = await knex(table)
      .where(where)
      .whereNull("deleted_at")
      .select(columns);
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addCreatedTimestamps,
  create,
  remove,
  update,
  first,
  findAll,
  countAll,
};
