const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const sound = document.querySelector("#sound");
const btn = document.querySelector("#search-btn");

btn.addEventListener("click",async()=>{
    let inpWord = document.querySelector("input").value;
    let response = await fetch(`${url}${inpWord}`);
    let data = await response.json();
    // console.log(data);
    try{
        result.innerHTML = `<div class="result">
                <div class="sample-word">
                    <h2>${inpWord}</h2>
                    <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
                </div>
                <div class="like-ele"><p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
                </div>
                <div class="meaning">
                    <p>${data[0].meanings[0].definitions[0].definition}</p>
                </div>
                <div class="explanation">
                    <div class="exp-mess"><p><i>${data[0].meanings[0].definitions[0].example}</i></p></div>  
                </div>
            </div>`;
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
            // console.log(sound);
    }catch(err){
        result.innerHTML = `<h3>Couldn't Find The Word</h3>`;
        console.log(err);
        document.querySelector("input").value = "";
    }
});

function playSound(){
    sound.play();
}