import axios from "axios";
// axios.get("https://pokeapi.co/api/v2/pokemon/{clefairy}/")
//     .then(response => {
//         console.log(response.data.height);
//     })

// // line2 is to identify the id or name
// // line 3 is calling the response
// // line 4 is what I waht to print out aka the response

axios.get("https://pokeapi.co/api/v2/gender/1/")
    .then(response => {
        console.log(response.data.name);
    })