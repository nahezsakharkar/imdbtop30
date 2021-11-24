//search-----------------------------------------------------------
function emptySearch() {
    for(let i=1;i<31;i++){
        document.getElementById(`position-${i}`).style.display = "flex";
    }
}

function search() {
    emptySearch();
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('list-single');
    if (input == "") {
        emptySearch();
    }
    else {
        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            }
            else {
                x[i].style.display = "flex";
            }
        }
    }
};
$("#search").keyup(function (event) {
    search();
});

//-----------------------------------------------------------------------------

//clickFav---------

const addFav = (id) => {
    document.getElementById(`heart${id}`).style.fontWeight = "bold";
    document.getElementById(`fav-${id}`).style.display = "flex";
} 

//---------remove

const removefav = (id) => {
    document.getElementById(`heart${id}`).style.fontWeight = "normal";
    document.getElementById(`fav-${id}`).style.display = "none";
} 
