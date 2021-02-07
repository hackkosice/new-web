(function($) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var responseObject = JSON.parse(this.response)
        responseObject.forEach((team, i) => {
            $('.marathon-leaderboard-content').append(createTeamRow(team, i))
        });
    }
    };
    xhttp.open("GET", "http://dev.hackkosice.com:8081/stats", true);
    xhttp.send();

})(jQuery)

function createTeamRow(team, order) {
    return `<tr>
                <td>${order + 1}.</td>
                <td>${team.name}</td>
                <td>${team.points}</td>
            </tr>`
}

