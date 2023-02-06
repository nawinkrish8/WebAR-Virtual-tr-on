

let ears1img, ears2img, eye1img, neck1img, neckimg, nose1img, ForeHeadimg;
let isear = false;
let isEye1 = false;
let isNeck = false;
let isNeck1 = false;
let ishead = false;
let isNose1 = false;
let eyeDistance;


cont = [127, 234, 132, 58, 172, 150, 149, 148, 152, 377, 378, 379, 397, 288, 361, 454,
    356];
lips = [57, 40, 37, 0, 267, 270, 287, 321, 314, 17, 84, 91];
brows = [70, 63, 105, 66, 107, 336, 296, 334, 293, 300];
nose = [168, 6, 195, 4, 98, 97, 2, 326, 327];
nose1 = [126];
eyes = [275];
mouth = [78, 81, 13, 311, 308, 402, 14, 178];
ear1 = [234];
ears2 = [454];
head = [10];
dist = [52, 282];
neck = [200];





let eardiv = document.getElementById("ears");
let foreheaddiv = document.getElementById("forehead");
let nose1div = document.getElementById("nosepin");
let eye1div = document.getElementById("coolers");
let necklessdiv = document.getElementById("neck");
let neckless1div = document.getElementById("neck1");




eardiv.onclick = function () {
    if (!isear) {
        eardiv.style.backgroundColor = "yellow";

    } else {
        eardiv.style.backgroundColor = "black";
    }
    isear = !isear;

};

foreheaddiv.onclick = function () {
    if (!ishead) {
        foreheaddiv.style.backgroundColor = "yellow";
    } else {
        foreheaddiv.style.backgroundColor = "black";
    }
    ishead = !ishead;

};
nose1div.onclick = function () {
    if (!isNose1) {
        nose1div.style.backgroundColor = "yellow";

    } else {
        nose1div.style.backgroundColor = "black";
    }
    isNose1 = !isNose1;

};

eye1div.onclick = function () {
    if (!isEye1) {
        eye1div.style.backgroundColor = "yellow";
    } else {
        eye1div.style.backgroundColor = "black";
    }
    isEye1 = !isEye1;

};
necklessdiv.onclick = function () {
    if (!isNeck) {
        necklessdiv.style.backgroundColor = "yellow";
    } else {
        necklessdiv.style.backgroundColor = "black";
    }
    isNeck = !isNeck;

};
neckless1div.onclick = function () {
    if (!isNeck1) {
        neckless1div.style.backgroundColor = "yellow";
    } else {
        neckless1div.style.backgroundColor = "black";
    }
    isNeck1 = !isNeck1;

};

let sketch = function (p) {
    let canvas;

    p.preload = function () {
        ears1img = p.loadImage("assets/eraTOP.png");
        ears2img = p.loadImage("assets/eraTOP.png");
        eye1img = p.loadImage("assets/coolers.png");
        neckimg = p.loadImage("assets/necklace.png");
        neck1img = p.loadImage("assets/chain.png");
        nose1img = p.loadImage("assets/nosepin.png");
        ForeHeadimg = p.loadImage("assets/nethichutti.png");
    };

    p.setup = function () {
        canvas = p.createCanvas(880, 680);
        canvas.id("video1");
    };

    p.draw = function () {
        p.clear();

        if (detections == undefined) {
            alert("please wait");
        }






        if (detections != undefined && isear) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectears1();

            }
        }



        if (detections != undefined && isEye1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectEyes2();

            }
        }


        if (detections != undefined && isNeck) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck();
            }
        }
        if (detections != undefined && isNeck1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNeck2();
            }
        }


        if (detections != undefined && ishead) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectHead();
            }
        }

        if (detections != undefined && isNose1) {
            if (
                detections.multiFaceLandmarks != undefined &&
                detections.multiFaceLandmarks.length >= 1
            ) {
                p.detectNose1();
            }
        }


    };

    function distance() {
        x1 = detections.multiFaceLandmarks[0][282].x * p.width;
        y1 = detections.multiFaceLandmarks[0][282].y * p.height;
        x2 = detections.multiFaceLandmarks[0][52].x * p.width;
        y2 = detections.multiFaceLandmarks[0][52].y * p.height;
        eyeDistance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }


    p.detectears1 = function () {
        let x, y;

        for (let i = 0; i < ear1.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][ear1[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][ear1[i]].y * p.height;

            }

        }


        p.image(ears1img, x - 50, y + 20);
        ears1img.resize(80, 80);


        let d, e;

        for (let i = 0; i < ears2.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                d = detections.multiFaceLandmarks[0][ears2[i]].x * p.width;
                e = detections.multiFaceLandmarks[0][ears2[i]].y * p.height;

            }

        }

        p.image(ears2img, d - 30, e + 20);
        ears2img.resize(80, 80);
    };





    p.detectEyes2 = function () {
        let x, y;

        for (let i = 0; i < eyes.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][eyes[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][eyes[i]].y * p.height;

            }
            distance();
            eye1img.width = eyeDistance * 1.8;
            eye1img.height = eyeDistance * 1.8;
            p.image(eye1img, x - eyeDistance, y - eyeDistance);
        }




    };


    p.detectNeck = function () {

        let x, y;


        for (let i = 0; i < cont.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][cont[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][cont[i]].y * p.height;



            }

            distance();
            neckimg.width = eyeDistance * 3.5;
            neckimg.height = eyeDistance * 3.5;
           
        }
        p.image(neckimg, x - eyeDistance * 2.5, y + eyeDistance * 1.2  );

    };
    p.detectNeck2 = function () {
        let x, y;

        for (let i = 0; i < cont.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][cont[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][cont[i]].y * p.height;

            }
            distance();
            neck1img.width = eyeDistance * 2.5;
            neck1img.height = eyeDistance * 2.5;

           
        }
        p.image(neck1img, x - eyeDistance * 2, y + eyeDistance * 1.2);

    };


    p.detectHead = function () {
        let x, y;

        for (let i = 0; i < head.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][head[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][head[i]].y * p.height;

            }
        }

        p.image(ForeHeadimg, x - 150, y - 100);
        ForeHeadimg.resize(300, 150);
    };




    p.detectNose1 = function () {
        let x, y;

        for (let i = 0; i < nose1.length; i++) {
            for (let j = 0; j < detections.multiFaceLandmarks[0].length; j++) {
                x = detections.multiFaceLandmarks[0][nose1[i]].x * p.width;
                y = detections.multiFaceLandmarks[0][nose1[i]].y * p.height;

            }
        }

        p.image(nose1img, x - 5, y - 10);
        distance();
        nose1img.width = eyeDistance / 5;
        nose1img.height = eyeDistance / 5;
    };





};

let myp5 = new p5(sketch);
