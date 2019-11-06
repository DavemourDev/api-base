export default class HomeController {

    async index(request, response, next) {

        response.json({
            'message': "welcome"
        });

    }

    async unauthorized(request, response, next) {

        response.json({
            'message': "unauthorized"
        });

    }

    

};