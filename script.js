function showTime(){
    const audio = document.querySelector('audio')
    audio.src = 'assets/Movie Themes - Last Of The Mohican -  Final Battle - Le Dernier Des Mohican.mp3';
    audio.play()

    document.querySelector('header').remove()

    const section = document.querySelector('section') 
    section.style.marginTop = 'initial'
    section.style.opacity = '1'
    section.style.transition = '7s ease-in-out 0s';
}

function back(){
    document.location.reload()
}


let deckMaster = ['A♠️','2♠️','3♠️','4♠️','5♠️','6♠️','7♠️','<b>A♥️</b>','<b>2♥️</b>','<b>3♥️</b>','<b>4♥️</b>','<b>5♥️</b>','<b>6♥️</b>','<b>7♥️</b>','A♣️','2♣️','3♣️','4♣️','5♣️','6♣️','7♣️']
let cont = 0  

function shuffle(){
    let cut1 = document.querySelector("#spades")
    let cut2 = document.querySelector("#hts")
    let cut3 = document.querySelector("#clubs")
    let display = document.querySelector('#display')
    let sentence = document.querySelector("#sentence")
    let rules = document.querySelector("#rules")
    let button = document.querySelector("#button")
    let solution = document.querySelector("#solution")


    while(cont < 3){
        let deckR1 = []
        let deckR2 = []
        let deckR3 = []
        let deckM = cut(deckMaster)

        while(deckM.length){
            deckR1.push(deckM.splice(0,1)[0])
            deckR2.push(deckM.splice(0,1)[0])
            deckR3.push(deckM.splice(0,1)[0])
        }
        cut1.innerHTML = `${deckR1.join(' ')}`
        cut2.innerHTML = `${deckR2.join(' ')}`
        cut3.innerHTML = `${deckR3.join(' ')}`

        if(cont == 0){
            sentence.style.opacity = '0'
            sentence.style.transition = '2s'
            rules.innerHTML = `Assim que encontrar sua carta, marque a linha.`
        }
        if(cont == 1){
            rules.innerHTML = "Mais uma vez..."
        }
        if(cont == 2){
            const decks = document.querySelectorAll('input[name="deck"]')
            let shake = document.querySelector("#shake")
            rules.style.opacity = '0'
            sentence.style.opacity = '1'
            shake.innerHTML = "Meta Magic"
            sentence.innerHTML = "ESTOU NA SUA MENTE AGORA!!!?"
            button.style.backgroundColor = "black"
            button.style.color = "white"
            button.style.boxShadow = '3px 3px yellow'
            button.value = "Clique AQUI, e comprovarei"

            decks.forEach(deck => {
                deck.remove()
            });

            
            setInterval(()=>{
                shake.classList.add('tremor');
                setTimeout(()=>{
                    shake.classList.remove('tremor');
                }, 700); 
            }, 1000); 
            
        }

        cont++
        return deckMaster = [...deckR1, ...deckR2, ...deckR3]   
    }
    button.style.opacity = '0'
    sentence.style.opacity = '1'
    sentence.style.transition = '4s'
    sentence.innerHTML = `Já sei!!!`
    rules.style.opacity = '1'
    rules.style.transition = '8s'
    rules.innerHTML = "Sua carta é ..."
    solution.style.opacity = '1'
    solution.innerHTML = `${deckMaster[10]}`
    display.style.opacity = '0'
    display.style.transition = '8s 5s'
    document.querySelector("img").style.opacity = '1'

    setTimeout(function() {         
        window.location.reload(1);
    }, 20000);
}

function cut(b){
    let radio1 = document.querySelector("#radio1")
    let radio2 = document.querySelector("#radio2")
    let radio3 = document.querySelector("#radio3")

    let deck_a = b.slice(0,7)
    let deck_b = b.slice(7,14)
    let deck_c = b.slice(14,21)

    if(radio1.checked){
        deckM = [...deck_b, ...deck_a, ...deck_c]
        radio1.checked = false
    }
    else if(radio2.checked){
        deckM = [...deck_a, ...deck_b, ...deck_c]
        radio2.checked = false
    }
    else if(radio3.checked){
        deckM = [...deck_a, ...deck_c, ...deck_b]
        radio3.checked = false
    }
    else{
        alert("Marque uma linha!!!")
        document.location.reload(true)
    }
    return deckM
}

