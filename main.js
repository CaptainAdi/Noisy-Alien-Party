function Start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lkE2Ji8wr/model.json', model_ready)
}

function model_ready() {
    classifier.classify(results)
}

function results(error, result) {
    console.log("gotresults")
    if (error) {
        console.error(error)
    } else {
        console.log(result)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("label").innerHTML = "I can hear " + result[0].label;
        document.getElementById("accuracy").innerHTML = "I can recieve " + (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        console.log("rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")")
        document.getElementById("accuracy").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        img1 = document.getElementById("Alien_1")
        img2 = document.getElementById("Alien_2")
        img3 = document.getElementById("Alien_3")
        img4 = document.getElementById("Alien_4")
        if (result[0].label == "Clap") {
            img2.src = 'aliens-02.gif'
            img1.src = "aliens-01.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if (result[0].label == "Bang") {
            img1.src = 'aliens-01.gif'
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if (result[0].label == "Snap") {
            img4.src = 'aliens-04.gif'
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
        } else {
            img3.src = 'aliens-03.gif'
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img4.src = "aliens-04.png"
        }
    }
}