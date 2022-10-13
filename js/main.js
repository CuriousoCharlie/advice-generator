const btn = document.getElementsByTagName("button")[0];
let enlargedContainer = false;

const displayAdvice = (adviceNum, advice) => {
    if (enlargedContainer) {
        document.querySelector(".advice-container").classList.add("enlarge-container");
    } else {
        document.querySelector(".advice-container").classList.remove("enlarge-container");
    }
    document.getElementById("adviceNum").innerHTML = `Advice # ${adviceNum}`;
    document.querySelector(".advice").innerHTML = `"${advice}"`;
};

const fetchAdvice = () => {
    let apiData = fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        if (data.slip.advice.length > 100) {
            enlargedContainer = true;
        } else {
            enlargedContainer = false;
        }
        displayAdvice(data.slip.id, data.slip.advice);
    })
    .catch((error) => {
        console.log("Fetch error: " + error );
    });
};

btn.addEventListener("click", () => {
    fetchAdvice();
});