//search-----------------------------------------------------------
function emptySearch() {
    document.getElementById("position-1").style.display = "flex";
    document.getElementById("position-2").style.display = "flex";
    document.getElementById("position-3").style.display = "flex";
    document.getElementById("position-4").style.display = "flex";
    document.getElementById("position-5").style.display = "flex";
    document.getElementById("position-6").style.display = "flex";
    document.getElementById("position-7").style.display = "flex";
    document.getElementById("position-8").style.display = "flex";
    document.getElementById("position-9").style.display = "flex";
    document.getElementById("position-10").style.display = "flex";
    document.getElementById("position-11").style.display = "flex";
    document.getElementById("position-12").style.display = "flex";
    document.getElementById("position-13").style.display = "flex";
    document.getElementById("position-14").style.display = "flex";
    document.getElementById("position-15").style.display = "flex";
    document.getElementById("position-16").style.display = "flex";
    document.getElementById("position-17").style.display = "flex";
    document.getElementById("position-18").style.display = "flex";
    document.getElementById("position-19").style.display = "flex";
    document.getElementById("position-20").style.display = "flex";
    document.getElementById("position-21").style.display = "flex";
    document.getElementById("position-22").style.display = "flex";
    document.getElementById("position-23").style.display = "flex";
    document.getElementById("position-24").style.display = "flex";
    document.getElementById("position-25").style.display = "flex";
    document.getElementById("position-26").style.display = "flex";
    document.getElementById("position-27").style.display = "flex";
    document.getElementById("position-28").style.display = "flex";
    document.getElementById("position-29").style.display = "flex";
    document.getElementById("position-30").style.display = "flex";
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
function addFav1() {
    document.getElementById("heart1").style.fontWeight = "bold";
    document.getElementById("fav-1").style.display = "flex";
}
function addFav2() {
    document.getElementById("heart2").style.fontWeight = "bold";
    document.getElementById("fav-2").style.display = "flex";
}
function addFav3() {
    document.getElementById("heart3").style.fontWeight = "bold";
    document.getElementById("fav-3").style.display = "flex";
}
function addFav4() {
    document.getElementById("heart4").style.fontWeight = "bold";
    document.getElementById("fav-4").style.display = "flex";
}
function addFav5() {
    document.getElementById("heart5").style.fontWeight = "bold";
    document.getElementById("fav-5").style.display = "flex";
}
function addFav6() {
    document.getElementById("heart6").style.fontWeight = "bold";
    document.getElementById("fav-6").style.display = "flex";
}
function addFav7() {
    document.getElementById("heart7").style.fontWeight = "bold";
    document.getElementById("fav-7").style.display = "flex";
}
function addFav8() {
    document.getElementById("heart8").style.fontWeight = "bold";
    document.getElementById("fav-8").style.display = "flex";
}
function addFav9() {
    document.getElementById("heart9").style.fontWeight = "bold";
    document.getElementById("fav-9").style.display = "flex";
}
function addFav10() {
    document.getElementById("heart10").style.fontWeight = "bold";
    document.getElementById("fav-10").style.display = "flex";
}
function addFav11() {
    document.getElementById("heart11").style.fontWeight = "bold";
    document.getElementById("fav-11").style.display = "flex";
}
function addFav12() {
    document.getElementById("heart12").style.fontWeight = "bold";
    document.getElementById("fav-12").style.display = "flex";
}
function addFav13() {
    document.getElementById("heart13").style.fontWeight = "bold";
    document.getElementById("fav-13").style.display = "flex";
}
function addFav14() {
    document.getElementById("heart14").style.fontWeight = "bold";
    document.getElementById("fav-14").style.display = "flex";
}
function addFav15() {
    document.getElementById("heart15").style.fontWeight = "bold";
    document.getElementById("fav-15").style.display = "flex";
}
function addFav16() {
    document.getElementById("heart16").style.fontWeight = "bold";
    document.getElementById("fav-16").style.display = "flex";
}
function addFav17() {
    document.getElementById("heart17").style.fontWeight = "bold";
    document.getElementById("fav-17").style.display = "flex";
}
function addFav18() {
    document.getElementById("heart18").style.fontWeight = "bold";
    document.getElementById("fav-18").style.display = "flex";
}
function addFav19() {
    document.getElementById("heart19").style.fontWeight = "bold";
    document.getElementById("fav-19").style.display = "flex";
}
function addFav20() {
    document.getElementById("heart20").style.fontWeight = "bold";
    document.getElementById("fav-20").style.display = "flex";
}
function addFav21() {
    document.getElementById("heart21").style.fontWeight = "bold";
    document.getElementById("fav-21").style.display = "flex";
}
function addFav22() {
    document.getElementById("heart22").style.fontWeight = "bold";
    document.getElementById("fav-22").style.display = "flex";
}
function addFav23() {
    document.getElementById("heart23").style.fontWeight = "bold";
    document.getElementById("fav-23").style.display = "flex";
}
function addFav24() {
    document.getElementById("heart24").style.fontWeight = "bold";
    document.getElementById("fav-24").style.display = "flex";
}
function addFav25() {
    document.getElementById("heart25").style.fontWeight = "bold";
    document.getElementById("fav-25").style.display = "flex";
}
function addFav26() {
    document.getElementById("heart26").style.fontWeight = "bold";
    document.getElementById("fav-26").style.display = "flex";
}
function addFav27() {
    document.getElementById("heart27").style.fontWeight = "bold";
    document.getElementById("fav-27").style.display = "flex";
}
function addFav28() {
    document.getElementById("heart28").style.fontWeight = "bold";
    document.getElementById("fav-28").style.display = "flex";
}
function addFav29() {
    document.getElementById("heart29").style.fontWeight = "bold";
    document.getElementById("fav-29").style.display = "flex";
}
function addFav30() {
    document.getElementById("heart30").style.fontWeight = "bold";
    document.getElementById("fav-30").style.display = "flex";
}

//---------remove

function removefav1() {
    document.getElementById("heart1").style.fontWeight = "normal";
    document.getElementById("fav-1").style.display = "none";
}
function removefav2() {
    document.getElementById("heart2").style.fontWeight = "normal";
    document.getElementById("fav-2").style.display = "none";
}
function removefav3() {
    document.getElementById("heart3").style.fontWeight = "normal";
    document.getElementById("fav-3").style.display = "none";
}
function removefav4() {
    document.getElementById("heart4").style.fontWeight = "normal";
    document.getElementById("fav-4").style.display = "none";
}
function removefav5() {
    document.getElementById("heart5").style.fontWeight = "normal";
    document.getElementById("fav-5").style.display = "none";
}
function removefav6() {
    document.getElementById("heart6").style.fontWeight = "normal";
    document.getElementById("fav-6").style.display = "none";
}
function removefav7() {
    document.getElementById("heart7").style.fontWeight = "normal";
    document.getElementById("fav-7").style.display = "none";
}
function removefav8() {
    document.getElementById("heart8").style.fontWeight = "normal";
    document.getElementById("fav-8").style.display = "none";
}
function removefav9() {
    document.getElementById("heart9").style.fontWeight = "normal";
    document.getElementById("fav-9").style.display = "none";
}
function removefav10() {
    document.getElementById("heart10").style.fontWeight = "normal";
    document.getElementById("fav-10").style.display = "none";
}
function removefav11() {
    document.getElementById("heart11").style.fontWeight = "normal";
    document.getElementById("fav-11").style.display = "none";
}
function removefav12() {
    document.getElementById("heart12").style.fontWeight = "normal";
    document.getElementById("fav-12").style.display = "none";
}
function removefav13() {
    document.getElementById("heart13").style.fontWeight = "normal";
    document.getElementById("fav-13").style.display = "none";
}
function removefav14() {
    document.getElementById("heart14").style.fontWeight = "normal";
    document.getElementById("fav-14").style.display = "none";
}
function removefav15() {
    document.getElementById("heart15").style.fontWeight = "normal";
    document.getElementById("fav-15").style.display = "none";
}
function removefav16() {
    document.getElementById("heart16").style.fontWeight = "normal";
    document.getElementById("fav-16").style.display = "none";
}
function removefav17() {
    document.getElementById("heart17").style.fontWeight = "normal";
    document.getElementById("fav-17").style.display = "none";
}
function removefav18() {
    document.getElementById("heart18").style.fontWeight = "normal";
    document.getElementById("fav-18").style.display = "none";
}
function removefav19() {
    document.getElementById("heart19").style.fontWeight = "normal";
    document.getElementById("fav-19").style.display = "none";
}
function removefav20() {
    document.getElementById("heart20").style.fontWeight = "normal";
    document.getElementById("fav-20").style.display = "none";
}
function removefav21() {
    document.getElementById("heart21").style.fontWeight = "normal";
    document.getElementById("fav-21").style.display = "none";
}
function removefav22() {
    document.getElementById("heart22").style.fontWeight = "normal";
    document.getElementById("fav-22").style.display = "none";
}
function removefav23() {
    document.getElementById("heart23").style.fontWeight = "normal";
    document.getElementById("fav-23").style.display = "none";
}
function removefav24() {
    document.getElementById("heart24").style.fontWeight = "normal";
    document.getElementById("fav-24").style.display = "none";
}
function removefav25() {
    document.getElementById("heart25").style.fontWeight = "normal";
    document.getElementById("fav-25").style.display = "none";
}
function removefav26() {
    document.getElementById("heart26").style.fontWeight = "normal";
    document.getElementById("fav-26").style.display = "none";
}
function removefav27() {
    document.getElementById("heart27").style.fontWeight = "normal";
    document.getElementById("fav-27").style.display = "none";
}
function removefav28() {
    document.getElementById("heart28").style.fontWeight = "normal";
    document.getElementById("fav-28").style.display = "none";
}
function removefav29() {
    document.getElementById("heart29").style.fontWeight = "normal";
    document.getElementById("fav-29").style.display = "none";
}
function removefav30() {
    document.getElementById("heart30").style.fontWeight = "normal";
    document.getElementById("fav-30").style.display = "none";
}
