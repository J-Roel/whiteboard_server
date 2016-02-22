exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('users', function(table){
            table.increments('id');
            table.string('username', 50);
            table.string('password', 50);
            table.string('role', 50);
            table.string('image_url', 255);
            table.string('f_name', 50);
            table.string('l_name', 50);
            table.string('email', 50);
            table.string('company', 50);
            table.string('project_ids', 50);

        }),

        knex.schema.createTable('projects', function(table){
            table.increments('id');
            table.string('name', 50);
            table.string('image_url', 255);
            table.integer('client_company_id');
            table.string('user_ids', 255);
            table.string('start_date', 50);
            table.string('end_date', 50);
            table.text('html');
            table.text('css');
        }),

        knex.schema.createTable('stories', function(table){
            table.increments('id');
            table.integer('project_id');
            table.string('user_last_name', 50);
            table.string('entry', 255);
            table.string('status', 50);
            table.string('description', 255);
            table.string('start_date', 50);
            table.string('end_date', 50);
        }),

        knex.schema.createTable('clients', function(table){
            table.increments('id');
            table.integer('project_id');
            table.string('co_name', 50);
            table.string('description', 255);
        }),

    ]);
};

exports.down = function(knex, Promise) {
   return Promise.all([
      knex.schema.dropTable('users'),
      knex.schema.dropTable('projects'),
      knex.schema.dropTable('stories'),
      knex.schema.dropTable('clients')
  ])
};
