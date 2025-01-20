// In ExpressJS, a controller is typically used to process incoming requests, interact with data models and then send response back to clients. They help to organize our application by seperating concerns and by following MVC(Model-View-Controller) design pattern.

const home = async (request, response) => {
  try {
    response.status(200).json({ message: "Hello from home controller" });
  } catch (error) {
    console.log(error);
  }
};

const register = async (request, response) => {
  try {
    response.status(200).json({ message: "Hello from register controller" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
