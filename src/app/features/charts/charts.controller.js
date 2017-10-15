export default class ChartsController{
    constructor(ChartsService){
        this.ChartsService = ChartsService;
        this._getTopPlaces();
    }

    _getTopPlaces(){
        this.ChartsService.getTopPlaces()
            .then((topPlaces)=> this.topPlaces = topPlaces);
    }
}

ChartsController.$inject = ['ChartsService'];