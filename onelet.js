const szakmai = document.getElementsByClassName("adat");
const szakmak = [...szakmai];

function megjelenitesKetto (){
    if(this.nextElementSibling == null){
        return;
    }else if(this.nextElementSibling.className == "nem"){
        this.nextElementSibling.classList.remove('nem')
        this.nextElementSibling.classList.add('igen')
    }else{
        this.nextElementSibling.classList.remove('igen')
        this.nextElementSibling.classList.add('nem')
    }
}

for(let i =0;i<szakmak.length;i++){
    szakmak[i].addEventListener('click',megjelenitesKetto);
}


