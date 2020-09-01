'use strict';

//const { test } = require("../config");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert("Users", 
    [
      {
      name: "FabianOalca",
      password: "testing123",
      email: "fabian@test.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
    ], 
    {}
    );
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Users", null, {});
     
  }
};
