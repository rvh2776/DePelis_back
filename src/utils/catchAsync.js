//! Funcion de orden superior
//? Lo que hace esta funcion es, capturar el error en el controller y pasarcelo a express ya que el mismo no puede manejar errores asyncronos.

const catchAsync = (controller) => {
    return (req, res, next) => {
        controller(req, res).catch((err) => next(err));
    };
};

module.exports = catchAsync;