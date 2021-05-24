let randPicsButton = document.getElementById("random-pics-button");
randPicsButton.addEventListener("click", randPics, false);

randPicsButton.addEventListener("mouseover", spinButton, false);

//function spinButton() {
//    randPicsButton.classList.add("animate__animated", "animate__flip");
//    //randPicsButton.classList.remove("animate__animated");
//    //randPicsButton.classList.remove("animate__flip");
//}


function randPics() {
    // Replace ./data.json with your JSON feed
    fetch('https://dog.ceo/api/breeds/image/random/50')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Work with JSON data here
            console.log(data.message.length);
            let k = "";
            for (let i = 0; i < data.message.length; i++) {
                k += "<img src='" + data.message[i] + "' class = 'animate__animated " + randAnimation() + "' />";
            }

            let picList = document.getElementById("random-pics-list");
            picList.innerHTML = k;

        })
        .catch((err) => {
            // Do something for an error here
        })
}

function randAnimation() {
    let animations = [
        "animate__backInDown",
        "animate__backInLeft",
        "animate__backInRight",
        "animate__backInUp",
        "animate__bounceIn",
        "animate__bounceInDown",
        "animate__bounceInLeft",
        "animate__bounceInRight",
        "animate__bounceInUp",
        "animate__fadeIn",
        "animate__fadeInDown",
        "animate__fadeInLeft",
        "animate__fadeInUp",
        "animate__fadeInRight",
        "animate__flipInX",
        "animate__flipInY",
        "animate__lightSpeedInRight",
        "animate__lightSpeedInLeft",
        "animate__lightSpeedInUp",
        "animate__lightSpeedInDown",
        "animate__rotateIn",
        "animate__rotateInDownLeft",
        "animate__rotateInDownRight",
        "animate__rotateInUpLeft",
        "animate__rotateInUpRight",
        "animate__zoomIn",
        "animate__zoomInDown",
        "animate__zoomInLeft",
        "animate__zoomInUp",
        "animate__zoomInRight",
        "animate__slideInLeft",
        "animate__slideInRight",
        "animate__slideInUp",
        "animate__slideInDown"
    ];

    let randNumber = Math.floor(Math.random() * animations.length);

    return animations[randNumber];
}