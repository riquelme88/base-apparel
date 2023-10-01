//Desktop
let input = document.querySelector('.text-input')
let errorP = document.querySelector('#error') 
let errorImg = document.querySelector('#img-error')
//Mobile
let inputMob = document.querySelector('.text-input-mobile')
let errorPMob = document.querySelector('#error-mobile') 
let errorImgMob = document.querySelector('#img-error-mobile')


function error(){
    errorDesktop()
    errorMobile()
}

function errorDesktop(){
    if(input.value != ''){
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex.test(input.value.toLowerCase())){
            errorP.innerHTML = "Please provide a valid email "
            input.style.border = '2px solid hsl(0, 93%, 68%)'
            errorImg.style.display = 'inline'
            ola
        }else{
            errorP.innerHTML = ""
            input.style.border = ''
            errorImg.style.display = 'none'
        }
    }
    if(input.value == ''){
        errorP.innerHTML = "Please enter an email"
        input.style.border = '2px solid hsl(0, 93%, 68%)'
        errorImg.style.display = 'inline'
    }else{
        errorP.innerHTML = ""
        input.style.border = ''
        errorImg.style.display = 'none'
    }
}

function errorMobile(){
    if(inputMob.value != ''){
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex.test(inputMob.value.toLowerCase())){
            errorPMob.innerHTML = "Please provide a valid email "
            inputMob.style.border = '2px solid hsl(0, 93%, 68%)'
            errorImgMob.style.display = 'inline'
            ola
        }else{
            errorPMob.innerHTML = ""
            inputMob.style.border = ''
            errorImgMob.style.display = 'none'
        }
    }
    if(inputMob.value == ''){
        errorPMob.innerHTML = "Please enter an email"
        inputMob.style.border = '2px solid hsl(0, 93%, 68%)'
        errorImgMob.style.display = 'inline'
    }else{
        errorPMob.innerHTML = ""
        inputMob.style.border = ''
        errorImgMob.style.display = 'none'
    }
}