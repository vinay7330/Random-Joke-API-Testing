const btn = document.body.querySelector(".btn");
const container = document.body.querySelector("#joke-display");
const answer = document.body.querySelector("#answer");

const GetEmoji=()=>{
    const emoji = ["😂", "🤣", "😝", "🤭"];
    return emoji[Math.floor(Math.random() * 4)];
}

const DisplayJoke = async () => {
    try {
        answer.disabled = false;
        let promise = await axios.get("https://official-joke-api.appspot.com/random_joke");
        container.textContent=promise.data.setup
        console.log(promise.data.setup);
        answer.addEventListener("click", () => {
            container.textContent = `${promise.data.punchline} ${GetEmoji()}`;
            answer.disabled = true;
        });
    } catch(e){
        console.log("OOPS!",e)
    }
}

btn.addEventListener("click", DisplayJoke);