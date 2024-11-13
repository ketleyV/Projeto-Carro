let listaCarros = [
    {
       "nome": "Porsche 911 Carrera GTS",
       "img": "img/Porsche-911-Carrera-GTS-2023-1.jpg",
       "descricao": "O Porsche 911 Carrera GTS 2024 traz motor 3.0 a gasolina, de seis cilindros opostos horizontalmente e 24 válvulas. O motor gera 480 cv de potência e 58,1 kgfm de torque máximo.",
    },
    {
        "nome": "Lamborghini Aventador",
        "img": "img/foto-Album-de-LAMBORGHINI-AVENTADOR-A8475-651b067edde23.jpeg",
        "descricao": "O Aventador tem um desempenho estimado para fazer 0–100 km/h em 2,9 segundos e velocidade máxima limitada é de 350 km/h. e oficial de 380 km/h registrada pela revista sport auto magazine. É equipado com um motor 6.5 V12 que gera 700 cavalos de potência com o uso intensivo em fibra de carbono.",
     },
     {
        "nome": "BMW i8",
        "img": "img/download.jpeg",
        "descricao": "o carro esportivo i8 2020 vai de 0 a 100 km/h em 4,4 segundos na versão coupé - que pesa 1.535 kg - e em 4,6 segundos na modalidade conversível - o Roadster pesa 1.595 kg. Ambos possuem velocidade máxima limitada eletronicamente a 250 km/h.",
     },
     {
        "nome": " Audi R8",
        "img": "img/audi-r8gt-03.webp",
        "descricao": "A versão top de linha do R8 GT, que atinge 320 km/h de velocidade máxima, desenvolve 560 cavalos de potência. Graças às novas tecnologias para redução de peso, baseadas em alumínio, o modelo ficou 100 kg mais leve e, agora, acelera de 0 a 100 km/h em 3,6 segundos.",
     },
     {
        "nome": "Toyota Supra",
        "img": "img/image.webp",
        "descricao": "Na ficha técnica deste esportivo, também conhecido como Supra MK5, temos um motor 3.0 turbo com potência de 387 cavalos, torque de 50,8 Kgfm e câmbio automático de 8 marchas. Vai de 0 a 100 em 3,9 segundos e atinge velocidade máxima de 250 Km/h. Peso de 1.542 Kg",
     },
     {
        "nome": "Jaguar F-type75",
        "img": "img/jaguar-f-type-75-br.webp",
        "descricao": "São 300 cv de potência e 40,8 mkgf de torque a partir das 1.500 rpm. O câmbio é automático de oito marchas, com conversor de torque. Conforme dados a Jaguar, a aceleração de 0 a 100 km/h é feita em 5,9 segundos e a velocidade máxima é de 250 km/h.",
      },
]

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
   cardCarro.innerHTML += `
         <div class="col-md-4">
         <div class="card m-2">
              <img src="${carro.img}" class="card-img-top" alt"...">
              <div class="card-body">
                   <h5 class="card-title">${carro.nome}</h5>
                   <a href="#" class="btn btn-secondary" onclick ="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
               </div>
            </div>
          </div>
`

})

function zoomImg(posicao){
   let carroSelecionado = listaCarros[posicao];
   document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
   document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
   document.getElementById("imgModal").src = carroSelecionado.img;

  new bootstrap.Modal('#zoomImg').show(); 

}

function alterarTemaSite(){
   let tema = document.querySelector("html").getAttribute("data-bs-theme");
   if(tema === "dark"){
      document.querySelector("html").setAttribute("data-bs-theme", "light");
      document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-sun-fill"></i>`;
   }else{
      document.querySelector("html").setAttribute("data-bs-theme", "dark");
      document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
   }
}