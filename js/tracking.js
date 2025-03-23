// Load stored times or initialize them
let totalTime = parseInt(localStorage.getItem("totalTime")) || 0;
let zenSenseTime = parseInt(localStorage.getItem("zenSenseTime")) || 0;
let zenFitTime = parseInt(localStorage.getItem("zenFitTime")) || 0;

let sessionStartTime = Date.now();  // Track time when user starts session
let zenSenseStartTime = null;
let zenFitStartTime = null;

// Function to update and store time in localStorage
function updateTime() {
    let elapsedTotalTime = Math.floor((Date.now() - sessionStartTime) / 1000);
    localStorage.setItem("totalTime", totalTime + elapsedTotalTime);

    if (zenSenseStartTime !== null) {
        let elapsedZenSenseTime = Math.floor((Date.now() - zenSenseStartTime) / 1000);
        localStorage.setItem("zenSenseTime", zenSenseTime + elapsedZenSenseTime);
    }

    if (zenFitStartTime !== null) {
        let elapsedZenFitTime = Math.floor((Date.now() - zenFitStartTime) / 1000);
        localStorage.setItem("zenFitTime", zenFitTime + elapsedZenFitTime);
    }
}

// Update time every second
setInterval(updateTime, 1000);

// Track ZenSense time if on ZenSense page
if (window.location.pathname.includes("zensense.html")) {
    zenSenseStartTime = Date.now();
}

// Track ZenFit time if on ZenFit page
if (window.location.pathname.includes("zenfit.html")) {
    zenFitStartTime = Date.now();
}

// Display stored tracking data on ZenTracker page
if (window.location.pathname.includes("zentracker.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("total-time").innerText = formatTime(localStorage.getItem("totalTime"));
        document.getElementById("zensense-time").innerText = formatTime(localStorage.getItem("zenSenseTime"));
        document.getElementById("zenfit-time").innerText = formatTime(localStorage.getItem("zenFitTime"));
    });
}

// Function to format time from seconds to HH:MM:SS
function formatTime(seconds) {
    seconds = parseInt(seconds) || 0;
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
}
