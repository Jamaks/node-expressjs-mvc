import { Controller } from "../Controller";

export default class HomeController extends Controller {
    constructor(basePath) {
        super(basePath);

        // Route definitions for this controller
        this.router.get("/", (req, res) => { this.index(req, res); });
        this.router.get("/index", (req, res) => { this.index(req, res); });
    }

    index(request, response) {
        this.renderView(response, "index");
    }
}
module.exports = HomeController;