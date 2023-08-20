import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config('.env');

const outputFile = './swagger_output.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, {  
  info: {
    title: "Express Mongoose Service",
    version: "0.0.1",
    description: "The Express Mongoose for MERN App.",
  },
  host: `localhost:${process.env.PORT}`,
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization'
    }
  }
});
