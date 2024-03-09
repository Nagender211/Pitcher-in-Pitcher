const VideoElement=document.getElementById('video');
const btn=document.getElementById('button');

// Promet select to selectn Media stream,pass to video element,then paluy
async function selectMediaStream() {
    try {
        const MediaStream=await navigator.mediaDevices.getDisplayMedia();
        VideoElement.srcObject = MediaStream;
        VideoElement.onloadedmetadata = () => {
            VideoElement.play();
        }
    } catch (error) {
        console.log("Whoops,error here",error)
        
    }

btn.addEventListener('click', async () => {

    // button disable
    btn.disabled=true;
    // request pitecher in picture
    await VideoElement.requestPictureInPicture();
    // start button 
    btn.disabled=false;

});
}
selectMediaStream()

