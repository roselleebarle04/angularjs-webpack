function appConfig() {
    
}

function run() {

}

angular
    .module('app', [])
    .config(appConfig)
    .run(require(run));

export default 'app';