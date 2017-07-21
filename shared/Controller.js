var express = require("express"),
    extend = require("extend");
 
export class Controller {
    constructor(basePath) {
        this.prvBase = basePath;
        this.prvRouter = express.Router(); //eslint-disable-line new-cap
    }
 
    renderView(response, viewName, localData = {}) {
        let viewPath = this.prvBase + "/" + viewName;
        let defaultData = {
            title: "Test data"
        };
        let data = extend(defaultData, localData);
        response.render(viewPath, data);
    }
 
    get basePath() {
        return this.prvBase;
    }
 
    get router() {
        return this.prvRouter;
    }
}