const videoLink = prompt("Please enter the YouTube video link:");

fetch(`https://www.youtube.com/oembed?url=${videoLink}&format=json`)
  .then(response => response.json())
  .then(data => {
    const videoUrl = data.thumbnail_url.replace("hqdefault", "maxresdefault");
    
    const videoElement = document.createElement("video");
    videoElement.src = videoUrl;
    videoElement.controls = true;
    
    const container = document.getElementById("video-container");
    container.appendChild(videoElement);
  })
  .catch(error => {
    console.error("Error fetching video:", error);
  });
// i have no idea if this works
