const gamePlayDAO = require('../model/index.js').gamePlayDAO ;

class GamePlayController {

    async listAllGamePlays(request, response, next) {
        
        try {
            let data = await gamePlayDAO.listAll();
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async insertGamePlay(request, response, next) {
        const { userID, gameID, score, grade, dateTime } = request.body;
        try {
            const data = { userID, gameID, score, grade, dateTime };
            const insertedData = await gamePlayDAO.create(data);
            response.status(200).json({
                result: "success",
                inserted: insertedData
            });
        } catch (error) {
            next(error);
        }
    
    }

    async getGamePlayById(request, response, next) {
        
        const { id } = request.params;
        try {
            const data = await gamePlayDAO.findById(id);
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async getGamePlaysFromToday(request, response, next) {
        try {
            let data = await gamePlayDAO.findToday();
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async getGamePlaysFromLastWeek(request, response, next) {
        try {
            let data = await gamePlayDAO.findLastWeek();
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async getGamePlaysFromLastMonth(request, response, next) {
        
        try {
            let data = await gamePlayDAO.findLastMonth();
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async getGamePlaysByGame(request, response, next) {
        
        const { id } = request.body;
        try {
            let data = await gamePlayDAO.findByGame(id);
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async getHighestScoreGamePlayForGame(request, response, next) {
        const { id } = request.params;
        try {
            let data = await gamePlayDAO.findHighestScoreForGame(id);
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async getGamePlaysByPlayer(request, response, next) {
    
        const { id } = request.body;
        try {
            let data = await gamePlayDAO.findByPlayer(id);
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async editGamePlay() {
        const { id } = request.params;
        const { dateTime, score } = request.body;
        // !!! Las claves foráneas por el momento serán inmutables
        try {
            const data = {};
            // En este caso solamente añadimos las propiedades definidas,
            // ya que son las únicas que nos interesa que se modifiquen
            if (typeof dateTime !== 'undefined') data.dateTime = dateTime;
            if (typeof score !== 'undefined') data.score = score;
            
            const modifiedData = await gamePlayDAO.update(id, data);
            response.status(200).json({
                result: "success",
                modified: modifiedData
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteGamePlay(request, response, next) {

        const { id } = request.params;

        try {
            const deletedData = await gamePlayDAO.remove(id);
            response.status(200).json({
                result: "success",
                deleted: deletedData
            });
        } catch (error) {
            next(error);
        }
    
    }


};

module.exports =  new GamePlayController(); 