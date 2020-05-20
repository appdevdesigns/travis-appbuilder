module.exports = {
   environment: process.env.NODE_ENV || "development",
   connections: {
      appdev_default: {
         host: "db",
         port: 3306,
         user: "root",
         password: "r00t",
         database: "site"
      },
      appBuilder: {
         adapter: null,
         host: null,
         user: null,
         password: null,
         database: "appbuilder"
      }
   },
   // connections:
   // Sails style DB connection settings
   datastores: {
      appbuilder: {
         adapter: "sails-mysql",
         host: "db",
         port: 3306,
         user: "root",
         password: "r00t",
         database: "appbuilder"
      },
      site: {
         adapter: "sails-mysql",
         host: "db",
         port: 3306,
         user: "root",
         password: "r00t",
         database: "site"
      }
   },

   appbuilder: {
      baseURL: "http://localhost:1337",
      deeplink: null,
      mcc: {
         enabled: false,
         url: "http://localhost:1337",
         accessToken: "There is no spoon.",
         pollFrequency: 5000,
         maxPacketSize: 1048576
      },
      pathFiles: "data/app_builder",
      graphDB: {
         url: "http://arangodb:8529",
         user: "root",
         pass: "r00t"
      }
   },
   nodemailer: {
      default: "smtp",
      smtp: {
         type: "SMTP",
         host: "SMTP.HOST.ADDR",
         secureConnection: false,
         port: 25
      }
   },
   crontab: {},

   // notification_email
   // our smtp email service
   notification_email: {
      "enable": false,
      "default": "smtp",
      "smtp": {}
   },
  /* end notification_email */

   // process_manager
   // service for managing our process tasks
   process_manager: {
      enable: true
   }
};
