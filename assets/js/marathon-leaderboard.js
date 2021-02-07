(function($) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
    var responseObject = JSON.parse(this.response)
    var element = document.createElement("p")
    element.textContent = responseObject.message
    document.getElementsByClassName("marathon-leaderboard-content")[0].appendChild(element)
    }
    };
    xhttp.open("GET", "https://api.helfni.sk/test", true);
    xhttp.send();

    console.log($)

})(jQuery)
