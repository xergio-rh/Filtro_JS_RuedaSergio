function fetchPoke(){
    let id= document.getElementById("pokeId").value;
    let pepito = new XMLHttpRequest();
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
    pepito.open('GET',url);
    pepito.onreadystatechange = (function(){
        if(this.readyState === 4 && this.status===200){
            let response = JSON.parse(this.responseText);
            console.log(response["meals"]);
            displayPoke(response);
            //"{"name":"Pedro","lastname":Gomez}"
        }
    });
    pepito.send();
    
}