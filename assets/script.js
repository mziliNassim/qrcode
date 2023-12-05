let ResultDiv = document.querySelector(".result"),
    btn = document.querySelector('.btn'),
    input = document.querySelector('#urlInput')
;

function generateQRCode(url) {
    // create qrcode's div
    let codeDiv = document.createElement('div');
    ResultDiv.appendChild(codeDiv);
    codeDiv.classList.add('qrcode');

    // generate qr code
    let qrcode = new QRCode(codeDiv, {
        text: url,
        width: 428,
        height: 428
    });
}

btn.addEventListener('click', (e)=>{
    let url = input.value;
    e.preventDefault();

    if (url == '') {
        ResultDiv.innerHTML = "<p class='parg'>Please Fill Input Field_!!</p>";
    } else {
        ResultDiv.innerHTML = '';
        generateQRCode(url)
    }
})

input.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        e.preventDefault();
        let url = input.value;
        if (url == '') {
            ResultDiv.innerHTML = "<p class='parg'>Please Fill Input Field_!!</p>";
        } else {
            ResultDiv.innerHTML = '';
            generateQRCode(url)
        }
    }
})
