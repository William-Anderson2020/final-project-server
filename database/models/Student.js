/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://www.lightsong.net/wp-content/uploads/2020/12/blank-profile-circle.png"
  },

  gpa: {
    type: Sequelize.FLOAT,
    defaultValue: -1
  },
});

// Export the student model
module.exports = Student;