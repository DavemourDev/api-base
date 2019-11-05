
/* ERROR HANDLER */
function errorHandler(error, request, response, next) {
    if (response.headersSent) {
        return next(error);
    }
    response.setStatus(500);
    response.render('error', { error });
}

export default errorHandler;