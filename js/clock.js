// isim istendi
let myName = prompt("Lütfen adınızı giriniz: ");
let nameDOM = document.querySelector('#myName');
nameDOM.innerHTML = myName;

// Saat ve tarih bölümü
function saatiGoster(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    function ondanKucukse(i){
        if(i < 10)
            i = "0" + i;
        return i;
    }

    hours = ondanKucukse(hours);
    minutes = ondanKucukse(minutes);
    seconds = ondanKucukse(seconds);

    let anlikSaat = `${hours}:${minutes}:${seconds}`;
    //console.log(anlikSaat);

    let saat = document.getElementById('myClock');
    saat.innerHTML = anlikSaat;
}

//Her saniye gösterim yenilenir
setInterval(saatiGoster, 1000);
