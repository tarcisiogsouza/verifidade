function calcular(){
    var ano = window.document.querySelector('input#ano')
    var res = window.document.querySelector('div#res')
    var anno = Number(ano.value) 
    var data = new Date()
    var dataful = data.getFullYear()

    if(anno == 0 || anno > dataful){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{ 
        var fsex = document.getElementsByName('radsex')
        var idade = dataful - anno
        var gênero = ''
        var img = document.createElement('img')
            img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade > 0 && idade < 10){
               img.setAttribute('src', 'imagens/meninocrianca1.jpg')
            }else if(idade < 23){
                img.setAttribute('src', 'imagens/homemjovem1.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/homemadulto1.jpg')
            } else {
                img.setAttribute('src', 'imagens/homemidoso1.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade > 0 && idade < 10){
                img.setAttribute('src', 'imagens/meninacrianca1.jpg')
             }else if(idade < 23){
                img.setAttribute('src', 'imagens/mulherjovem1.jpg')
             } else if(idade < 50){
                img.setAttribute('src', 'imagens/mulheradulta1.jpg')
             } else {
                img.setAttribute('src', 'imagens/mulheridosa1.jpg')
             }
        }
       res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos!`
       res.appendChild(img)
        
    }
}

// PARTE "ELSE" DO CÓDIGO FEITO ANTES DE ASSISTIR A VÍDEO AULA
    /*
    else if(id <= 14 && genmasc != null){
        //CRIANÇA
        res.innerHTML = (`Você tem ${id} anos de idade!`)
        img.src = 'imagens/meninocrianca1.jpg'
    } else if (id > 14 && id < 25){
        //JOVEM
        res.innerHTML = (`Você tem ${id} anos de idade!`)
        img.src = 'imagens/homemjovem1.jpg'
        
    } else if(id >25 && id <= 55){
        res.innerHTML = (`Você tem ${id} anos de idade!`)
        img.src = 'imagens/homemadulto1.jpg'
    } else{
        res.innerHTML = (`Você tem ${id} anos de idade!`)
        img.src = 'imagens/homemidoso1.jpg'}
    }
    */





