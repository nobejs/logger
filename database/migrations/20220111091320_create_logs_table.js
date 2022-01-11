exports.up = async function (knex) {
  await knex.raw(`create extension if not exists "uuid-ossp"`);
  return knex.schema.createTable("logs", function (table) {
    table
      .uuid("uuid")
      .notNullable()
      .primary()
      .defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("service", 255);
    table.string("timestamp", 255);
    table.text("url");
    table.string("status_code", 255);
    table.string("http_method", 255);
    table.string("hostname", 255);
    table.string("protocol", 255);
    table.jsonb("source");
    table.jsonb("request_post_body");
    table.jsonb("response_body");
    table.jsonb("meta");
    table.datetime("created_at");
    table.datetime("updated_at");
    table.datetime("deleted_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("logs");
};
