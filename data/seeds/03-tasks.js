/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("tasks").del();
    await knex("tasks").insert([
      {
        task_description: "Plan schema",
        task_notes: "null",
        task_completed: false,
        project_id: 2,
      },
      {
        task_description: "Grocery shopping",
        task_notes: "shop for ingredients for sauce",
        task_completed: true,
        project_id: 3,
      },
      {
        task_description: "Planning",
        task_notes: "null",
        task_completed: false,
        project_id: 1,
      },
      {
        task_description: "Convert code to use classes",
        task_notes: "null",
        task_completed: true,
        project_id: 4,
      },
    ]);
  };