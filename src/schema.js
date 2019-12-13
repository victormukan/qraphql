
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const employeesService = require('../service/employeeService');

export const schema = buildSchema(`
  type Query {
    employee(id: Int!): Employee
    employees: [Employee],
  }
`);