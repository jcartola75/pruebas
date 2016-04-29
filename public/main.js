angular.module('angularTvshow', []);
function mainController($scope, $http) {  
    $scope.formData = {};

    // Cuando se cargue la página, pide del API todos los TVShows
    $http.get('/api/tvshows')
        .success(function(data) {
            $scope.tvshows = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Cuando se añade un nuevo TVShow, manda el texto a la API
    $scope.createTvshow = function(){
        $http.post('/api/tvshows', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.tvshows.push(data);
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    // Borra un TVShow despues de checkearlo como acabado
    $scope.deleteTvshow = function(id, idx) {
        $http.delete('/api/tvshow/' + id)
            .success(function(data) {
                $scope.tvshows.splice(idx, 1);
                // alert(data.message);
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
}