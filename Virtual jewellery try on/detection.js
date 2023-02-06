let detections = {};


var video = document.getElementById('video1');
video.setAttribute('playsinline', '');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.style.width = '880px';
video.style.height = '680px';



var facingMode = "user"; 
var constraints = {
    audio: false,
    video: {
        facingMode: facingMode
    }
};


navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
    video.srcObject = stream;
});
function gotFaces(results) {
    detections = results;

}




const faceMesh = new FaceMesh({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    },
});

faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
});
faceMesh.onResults(gotFaces);

const camera = new Camera(video, {
    onFrame: async () => {
        await faceMesh.send({ image: video });
    },
    width: 880,
    height: 680,
});
camera.start();

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 5000);

    function checkReady() {
        if (document.getElementsByTagName("body")[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? "block" : "none";
}

onReady(function () {
    show("page", true);
    show("loading", false);
});
