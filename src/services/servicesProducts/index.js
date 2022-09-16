const logger = require("../../utils/loggers/loggers");

const productoConfig = (body) => {
  try {
    const { titulo, precio, descripcion, codigo } = body;
    const img = body.img;
    const precioFormat = Number(precio);
    const date = new Date();
    const timestamp = ` ${date.getDay()}/ ${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
    const product = {
      titulo,
      precio: precioFormat,
      descripcion,
      codigo,
      img,
      timestamp,
    };

    return product;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = productoConfig;
