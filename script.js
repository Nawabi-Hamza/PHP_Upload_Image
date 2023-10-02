const  form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");


form.addEventListener("click",()=>{
    fileInput.click();
});
fileInput.onchange = ({target}) =>{
    let file = target.files[0]
    // console.log(target.files[0])
    if(file){
        const filename = file.name
        // console.log(filename)
        uploadFile(filename)
    }
}

function uploadFile(name){
    let xhr = new XMLHttpRequest()
    xhr.open("POST","upload.php")
    xhr.upload.addEventListener("progress",e=>{
        console.log(e)
    })
    const formData = new FormData(form)
    xhr.send(formData);
}