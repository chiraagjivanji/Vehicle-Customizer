let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var makeObject = {
    "Honda": {
        "Accord": ["CL1", "CL7"],
        "Civic": ["EG9", "EK9"],
        "Integra": ["DC2", "DC5"],
        "NSX": ["NSX-R"],
        "Prelude": ["Type S", "VTi-R"],
        "S2000": ["AP1", "AP2"]
    },
    "Mazda": {
        "MPS": ["Mazdaspeed3", "Mazdaspeed MX-5"],
        "MX-5": ["NA", "NB"],
        "RX-7": ["FC", "FD"],
        "RX-8": ["RX-8"]
    },
    "Mitsubishi": {
        "Colt": ["Ralliart Version-R"],
        "Evolution": ["Evolution IX", "Evolution X",],
        "FTO": ["GPX", "GR", "GS", "GX"],
        "GTO": ["Z15A", "Z16A"]
    },
    "Nissan": {
        "Fairlady Z": ["350Z", "370Z"],
        "Laurel": ["C34", "C35"],
        "Silvia": ["S15", "180SX"],
        "Skyline": ["R32", "R34"]
    },
    "Subaru": {
        "BRZ": ["ZN8", "ZD8"],
        "Forester": ["STI"],
        "Impreza": ["Type R", "WRX STI"],
    },
    "Toyota": {
        "Chaser": ["JZX90", "JZX100"],
        "MR2": ["AW11", "SW20"],
        "Soarer": ["Z20", "Z30"],
        "Sprinter": ["AE86, TE27"],
        "Supra": ["A80", "A90"],
        "86": ["GT86", "GR86"]
    }
}

window.onload = function () {
    var makeSel = document.getElementById("make");
    var modelSel = document.getElementById("model");
    var subModelSel = document.getElementById("subModel");
    var yearSel = document.getElementById("year");
    for (var x in makeObject) {
        makeSel.options[makeSel.options.length] = new Option(x, x);
    }
    makeSel.onchange = function () {
        subModelSel.length = 1;
        modelSel.length = 1;
        for (var y in makeObject[this.value]) {
            modelSel.options[modelSel.options.length] = new Option(y, y);
        }
    }
    modelSel.onchange = function () {
        subModelSel.length = 1;
        var z = makeObject[makeSel.value][this.value];
        for (var i = 0; i < z.length; i++) {
            subModelSel.options[subModelSel.options.length] = new Option(z[i], z[i]);
        }
    }
}

function showImage() {
    // create img element
    var img = document.createElement('img');
    let subModel = document.querySelector('#subModel');
    // checking if submodel is taking users input
    console.log(subModel.value);
    // clear the image container each time a new selection is made
    var div = document.getElementById('img-container');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    //submodel checks and image generations ~ should refactor and put into a loop, too much data
    //This only includes data for Honda at the moment cause I'm an L manz
    //Also need to add images of the customizations that you can do to the cars but thats easy
    switch (subModel.value) {
        case "CL1":
            img.src = "https://i.pinimg.com/736x/8a/50/b5/8a50b50d8a9d8c5f075eb7b57e4501ad--honda-accord-euro.jpg"
            // append img element to div
            document.getElementById('img-container').appendChild(img);
            break;
        case "CL7":
            img.src = "https://64.media.tumblr.com/c79225ab106e70b59644658c25d6bfbd/tumblr_on3s6qHmVm1u8imavo1_1280.jpg"
            document.getElementById('img-container').appendChild(img);
            break;
        case "EG9":
            img.src = "https://images.unsplash.com/photo-1592163964473-940e107ad7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            document.getElementById('img-container').appendChild(img);
            break;
        case "EK9":
            img.src = "https://images.unsplash.com/photo-1583695128215-418026b339c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            document.getElementById('img-container').appendChild(img);
            break;
        case "DC2":
            img.src = "https://images.unsplash.com/photo-1624833804885-d932d8f0f1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            document.getElementById('img-container').appendChild(img);
            break;
        case "DC5":
            img.src = "http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2017/05/26135638/Louis_Yio_2017_Speedhunters_Work_Integra_28-1200x800.jpg"
            document.getElementById('img-container').appendChild(img);
            break;
        case "NSX-R":
            img.src = "https://images.unsplash.com/photo-1624343844184-d900689f8f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            document.getElementById('img-container').appendChild(img);
            break;
        case "Type S":
            img.src = "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da6e8a1d4896127a9d2adf83461993b45339474c/photos/s-pGQqpGYuSj.e_Aa8ulSt.jpg?t=163127201841"
            document.getElementById('img-container').appendChild(img);
            break;
        case "VTi-R":
            img.src = "https://upload.wikimedia.org/wikipedia/commons/8/8b/1997-2001_Honda_Prelude_VTi-R_ATTS_coupe_%282011-11-17%29_02.jpg"
            document.getElementById('img-container').appendChild(img);
            break;
        case "AP1":
            img.src = "https://images.unsplash.com/photo-1616646187794-d3007d1923a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            document.getElementById('img-container').appendChild(img);
            break;
        case "AP2":
            img.src = "https://images.unsplash.com/photo-1625514679794-57a78fbd1466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            document.getElementById('img-container').appendChild(img);
            break;
    }
}