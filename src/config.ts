// reads from .env.developement by default if app runs with "npm run dev"

const config = {
    get apiUrl(): string {
      return `${process.env.API_PROTOCOL}://${process.env.API_URL}`;
    },
  };
  
  export default config;