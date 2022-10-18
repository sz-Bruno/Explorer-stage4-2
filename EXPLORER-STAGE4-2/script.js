let estudantes=[
    {
        nome:"João",
        nota1: 10,
        nota2:4.5
    },
    {
        nome:"José",
        nota1: 6.8,
        nota2:4.6
    },
    {
        nome:"Maria",
        nota1: 10,
        nota2:8.8
    },
    {
        nome:"Carla",
        nota1: 7,
        nota2:2.5
    },
    {
        nome:"Pedro",
        nota1: 5.4,
        nota2:10
    }
]



        estudantes.forEach((estudante)=>{
            let media=((estudante.nota1+estudante.nota2)/2).toFixed(1)
           
            if(media<7){
                window.alert(`Sua média foi ${media}, ${estudante.nome}. Não foi dessa vez!`)
            }else{
                window.alert(`Sua média foi ${media}, ${estudante.nome}. Parabéns pela conquista!`)
            }
        
        })
