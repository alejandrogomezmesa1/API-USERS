const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuarios con Node.js | Express | MongoDB | Swagger | JWT ",
      version: "1.0.0",
      description: "API REST para gestión de usuarios con MongoDB",
      contact: {
        name: "Alejandro Gomez",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["name", "email"],
          properties: {
            _id: {
              type: "string",
              description: "ID generado por MongoDB",
              example: "6a3c803513080e5e1de0579f",
            },
            name: {
              type: "string",
              description: "Nombre del usuario",
              example: "Alejo",
            },
            email: {
              type: "string",
              description: "Email del usuario",
              example: "alejo@test.com",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Fecha de creación",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Fecha de actualización",
            },
          },
        },
        UserInput: {
          type: "object",
          required: ["name", "email"],
          properties: {
            name: {
              type: "string",
              description: "Nombre del usuario",
              example: "Alejo",
            },
            email: {
              type: "string",
              description: "Email del usuario",
              example: "alejo@test.com",
            },
            password: {
              type: "string",
              description: "Contraseña del usuario",
              example: "123456",
            },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./Routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
