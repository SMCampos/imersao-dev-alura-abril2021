function exibirTime(){
    limpaDiv()
    let times = ['Real Madrid','Barcelona','Manchester City','Bayern de Munique', 'Paris Saint Germain']

    let nomes = ['Real Madrid','Barcelona','Manchester City','Bayern de Munique', 'Paris Saint Germain']

    let escudos = ['./assets/real.png', './assets/barcelona.png', './assets/manchester.png', './assets/bayer.png', './assets/psg.png']

    let descricoes = ['O Real Madrid Club de Fútbol, mais conhecido como Real Madrid ou simplesmente Real, é um clube polidesportivo espanhol, com sede em Madrid. Foi fundado oficialmente no dia 6 de março de 1902 pelos irmãos Juan Padrós e Carlos Padrós, com o nome de Madrid Foot-Ball Club', 'Futbol Club Barcelona, também conhecido como Barcelona e popularmente como Barça, é um clube de futebol profissional, com sede em Barcelona, Catalunha. Para a temporada 2020/2021, a equipe joga a La Liga, na Espanha. Fundado em 1899 por um grupo de futebolistas suíços, ingleses e catalães.', 'Manchester City Football Club é um clube de futebol inglês, que disputa a Premier League, tendo sido fundado em 1880. É considerado um dos principais clubes da atualidade. O City é um dos clubes mais antigos e tradicionais da Inglaterra.', 'Bayern de Munique, comumente referido como Bayern, é um clube alemão multidesportivo sediado na cidade de Munique, no estado da Baviera. O estado e a cidade, que em alemão, respectivamente, se denominam Bayern e München, dão nome ao time. O "FC Bayern" foi fundado em 1900 por onze jogadores de futebol.', 'O Paris Saint-Germain Football Club, também conhecido como Paris Saint-Germain ou pela sua sigla "PSG", é um clube de futebol profissional da França, com sede em Paris. As suas cores são as cores tradicionais da cidade de Paris, o azul e o vermelho, e de Saint-Germain, distrito nos arredores de Paris, branco.' ]

    let time = document.querySelector("#time")
    time = (time.value)
    
    let timeIndex = times.indexOf(time)
    if (timeIndex != -1){
        let escudo = document.querySelector("#escudo")
        escudo.innerHTML = "<img src=" + escudos[timeIndex] + ">"
    
        let descricao = document.querySelector("#descricao")
            descricao.innerHTML = "<span id='titulo'>" + nomes[timeIndex] + "</span>" + "<span id='p'>" + descricoes[timeIndex] + "</span>"
    } 
    else{
        let aviso = document.querySelector("#descricao")
            aviso.innerHTML= "<span id='indisponivel'>Ainda não possuimos esse time :(</span>"

   }
}

function passaValor(valor){
    let input = document.querySelector('#time')
    let nome = document.getElementById(valor)
    input.value = nome.innerText
    exibirTime()
}

function limpaDiv(){
    let div = document.getElementById('escudo')
    div.innerHTML = " "
}


