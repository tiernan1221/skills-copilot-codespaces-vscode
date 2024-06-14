function skillsMember() {
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var level = document.getElementById("level").value;
    var skillValue = document.getElementById("skillValue").value;
    var levelValue = document.getElementById("levelValue").value;
    var skillLevel = skill + "-" + level;
    var skillLevelValue = skillValue + "-" + levelValue;
    var skillMap = {};
    skillMap[skillLevel] = skillLevelValue;
    var memberSkills = {};
    memberSkills[member] = skillMap;
    var memberSkillsJson = JSON.stringify(memberSkills);
    var url = "/skillsMember?memberSkills=" + memberSkillsJson;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
}