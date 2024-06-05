function skillsMember() {
    return{
        restrict : 'E',
        templateUrl : 'modules/skills/views/member.html',
        controller : 'SkillsMemberController',
        controllerAs : 'vm',
        bindToControlller : true,
        scope: {
            member : 'm'
        }
    };
}