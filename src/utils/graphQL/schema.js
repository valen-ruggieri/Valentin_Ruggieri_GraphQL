const {makeExecutableSchema} =require('graphql-tools');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const schema = makeExecutableSchema(
 {   typeDefs:typeDefs,
    resolvers:resolvers}
)
module.exports = schema;
