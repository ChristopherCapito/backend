const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
      },
      options: {
        ssl: false,
      },
    },
  },
});


// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "postgres",
//         host: "${process.env.DATABASE_HOST}",
//         port: "${process.env.DATABASE_PORT}",
//         database: "${process.env.DATABASE_NAME}",
//         username: "${process.env.DATABASE_USERNAME}",
//         password: "${process.env.DATABASE_PASSWORD}",
//         ssl: { "rejectUnauthorized": false }
//       },
//       options: {}
//     }
//   }
// });
