/*

<div class="card">
<div class="cardMeal">
<img class="img" src="./img/thought-catalog-EMX1eJ1BcgU-unsplash.jpg" alt="avocado" width="300px" height="200px">
<div class="bottomCard">
<h4 class="mealTitle">Avocado</h4>
<button class="recipebtn">Recipe</button>
</div>
</div>

*/

//// SELECTORS
const input = document.querySelector('.inputSearch');
const img = document.querySelectorAll('.img');
const mealTitle = document.querySelectorAll('.mealTitle');
const recipe = document.querySelector('.recipeText');
const searchButton = document.querySelector('.searchbtn');
const cont = document.querySelector('.container');
const details = document.querySelector('.details');



/*const recette = () =>{
    const btnRecipe = document.querySelectorAll('.recipebtn');
    const card = document.querySelector('.card');
    btnRecipe.forEach(btn =>{
        btn.addEventListener('click', (e) =>{
            e.preventDefault();
            if(e.target.classList.contains('recipe-btn')){
                let btnR = e.target.parentElement.parentElement;
                console.log(btnR);
            }
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${}`)
        .then(response => response.json())
        .then((data)=> {
            console.log(data);
        })
    })
    })
}
*/
cont.addEventListener('click', recette);


input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchButton.click()
    }
});
searchButton.addEventListener('click', () =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input.value.trim()}`)
    .then(response => response.json())
    .then((data) => {
        cont.innerHTML = "";
        if(data.meals){
            data.meals.forEach(a => {
            cont.innerHTML +=`
            <div class="card">
                <div class="cardMeal" data-id="${a.idMeal}">
                    <img class="img" src="${a.strMealThumb}" alt="mealimg" width="300px" height="200px">
                    <div class="bottomCard">
                    <h4 class="mealTitle">${a.strMeal}</h4>
                    <button class="recipebtn">Recipe</button>
                </div>
            </div>`
            });
       
        }else {
            cont.innerHTML = "<h1>Sorry, we don't have any recipe with this ingredient.<h1>"
        }

        
    })
} )


 function recette(e){
    e.preventDefault();
    if(e.target.classList.contains('recipebtn')){
        let btnR = e.target.parentElement.parentElement;
        let R = btnR.getAttribute('data-id');
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${R}`)
        .then(response => response.json())
        .then(data=>fullRecette(data.meals))
}
}


const fullRecette = (meal) => {
    console.log(meal);
    meal = meal[0];
    cont.innerHTML += `
            <div class="details">
                <button class="quit"><i class="fas fa-times"></i></button>
                <h4 class="mealTitle">${meal.strMeal}</h4>
                <img class="img abso" src="${meal.strMealThumb}" alt="avocado" width="300px" height="200px">
                <p class="recipeText">${meal.strInstructions}</p>
            </div>`; 
/*

            
*/
} 