const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const poseResult = document.getElementById("poseResult");

let detector;
let isDetecting = false;
let animationFrameId;

async function loadPoseDetector() {
    detector = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet
    );
}

async function detectPose() {
    if (!isDetecting) return;

    const poses = await detector.estimatePoses(video);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    if (poses.length > 0) {
        drawKeypoints(poses[0].keypoints);
        evaluatePose(poses[0].keypoints);
    }
    animationFrameId = requestAnimationFrame(detectPose);
}

function drawKeypoints(keypoints) {
    keypoints.forEach((keypoint) => {
        if (keypoint.score > 0.3) {
            ctx.beginPath();
            ctx.arc(keypoint.x, keypoint.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
        }
    });
}

function evaluatePose(keypoints) {
    let feedback = "Adjust your pose!";

    const leftWrist = keypoints.find(kp => kp.name === "left_wrist");
    const rightWrist = keypoints.find(kp => kp.name === "right_wrist");
    const leftKnee = keypoints.find(kp => kp.name === "left_knee");
    const rightKnee = keypoints.find(kp => kp.name === "right_knee");

    if (leftWrist && rightWrist) {
        if (leftWrist.y < rightWrist.y) {
            feedback = "✅ Tadasana (Mountain Pose) detected!";
        } else if (leftKnee.y < rightWrist.y) {
            feedback = "✅ Vrikshasana (Tree Pose) detected!";
        } else if (leftWrist.y < leftKnee.y && rightWrist.y < rightKnee.y) {
            feedback = "✅ Warrior Pose detected!";
        } else {
            feedback = "✅ Downward Dog Pose detected!";
        }
    }

    poseResult.innerText = feedback;
}

// Start Button
startButton.addEventListener("click", async () => {
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";

    isDetecting = true;
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    await loadPoseDetector();
    detectPose();
});

// Stop Button
stopButton.addEventListener("click", () => {
    isDetecting = false;
    cancelAnimationFrame(animationFrameId);
    video.srcObject.getTracks().forEach(track => track.stop());
    video.style.display = "none";
    stopButton.style.display = "none";
    startButton.style.display = "inline-block";
    poseResult.innerText = "Detection stopped.";
});
