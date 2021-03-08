
function assistir(){
    window.open("https://www.youtube.com/watch?v=bWAkyvOgjGU");
    
}

function maisInfo(elemento){
    elemento.innerHTML = "Em uma rara saída à noite, ela conhece um homem no bar e se deixa envolver. Apenas um beijo bastou para deixar Louise apaixonada.";
}

function voltar(elemento){
    elemento.innerHTML = "Mais informações";
}


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
