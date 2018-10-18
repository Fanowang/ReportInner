app.config(function ($mdIconProvider) {
    $mdIconProvider
        .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
})
app.controller('reportController', function ($scope) {
    $scope.Message = "It's a report configure interface for IOL!";
    var imagePath = 'img/list/60.jpeg';    
    $scope.reports = [
        {
            type: imagePath,
            title: 'Brunch this weekend?',
            createdby: 'Min Li Chan',
            created: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            type: imagePath,
            title: 'Brunch this weekend?',
            createdby: 'Min Li Chan',
            created: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            type: imagePath,
            title: 'Brunch this weekend?',
            createdby: 'Min Li Chan',
            created: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            type: imagePath,
            title: 'Brunch this weekend?',
            createdby: 'Min Li Chan',
            created: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            type: imagePath,
            title: 'Brunch this weekend?',
            createdby: 'Min Li Chan',
            created: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
    ];
});