export default function topPlaces() {
    return {
        restrict: 'E',
        scope : {
            data : '=',
        },
        template: require('./charts.topPlaces.html'),
        link: function (scope, element) {
            scope.values = [];
            scope.labels = [];

            scope.$watch('data', (data)=>{
                if (data)
                    normalizeData(data);
            })


            function normalizeData(data){
                var dataNormalized = data.reduce((obj, current) =>{
                    obj.values.push(current.count);
                    obj.labels.push(current.place[0].name);
                    return obj;
                },{values : [], labels : []});
                scope.values =  dataNormalized.values;
                scope.labels = dataNormalized.labels;
            }
        }
    }
}