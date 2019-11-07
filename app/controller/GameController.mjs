
import { gameDAO } from '../model/index.mjs'

export default class GameController {

    async listAllGames(request, response, next) {

        try {
            let data = await gameDAO.listAll();
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
        
    }

    async insertGame(request, response, next) {
        const { name, description, script, category } = request.body;
        try {
            const data = { name, description, script, category };
            const insertedData = await gameDAO.create(data);
            response.status(200).json({
                result: "success",
                inserted: insertedData
            });
        } catch (error) {
            next(error);
        }
    }

    async listGamesInCategory(request, response, next) {

        const { category } = request.params;

        try {
            let data = await gameDAO.findByCategory(category);
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
        
    }

    async getGameById(request, response, next) {
        const { id } = request.params;

        try {
            const data = await gameDAO.findById(id);
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    async getGameByName(request, response, next) {
        const { name } = request.params;
        // NOTA: Obtiene uno solamente. El nombre ha de ser exacto (case insensitive)
        try {
            const data = await gameDAO.findByName(name);
            response.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }


    async editGame(request, response, next) {
        const { id } = request.params;
        const { name, description, script, category } = request.body;

        try {
            const data = {};
            // En este caso solamente añadimos las propiedades definidas,
            // ya que son las únicas que nos interesa que se modifiquen
            if (typeof name !== 'undefined') data.name = name;
            if (typeof description !== 'undefined') data.description = description;
            if (typeof script !== 'undefined') data.script = script;
            if (typeof category !== 'undefined') data.category = category;
            const modifiedData = await gameDAO.update(id, data);
            response.status(200).json({
                result: "success",
                modified: modifiedData
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteGame(request, response, next) {
// TODO terminar

        const { id } = request.params;

        try {
            
        } catch (error) {
            
        }
    }

};