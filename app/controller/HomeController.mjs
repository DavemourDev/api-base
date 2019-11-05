export default class HomeController {

    /**
     * 
     * 
     * @param request 
     * @param response 
     * @param next 
     */
    async index(request, response, next) {

        response.json({
            'message': "welcome"
        });

    }

    /**
     * 
     * 
     * @param request 
     * @param response 
     * @param next 
     */
    async unauthorized(request, response, next) {

        response.json({
            'message': "unauthorized"
        });

    }

    

};