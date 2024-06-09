function skillsMember() {
    var member = {
        name: 'Jhon',
        age: 20,
        skills: ['JavaScript', 'HTML', 'CSS'],
        addSkill: function(skill) {
            this.skills.push(skill);
        }
    };
    return member;
}