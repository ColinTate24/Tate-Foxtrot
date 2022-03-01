const Games = [
    "Call of Duty (Zombies)",
    " Halo",
    " Final Fantasy",
    " Sonic the Hedgehog"
];

Games.forEach(function(entry) {
    document.getElementById("mygames").innerHTML = Games;
})