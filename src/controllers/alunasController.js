const alunas = require('../model/alunas.json')


exports.get = (req,res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}
exports.getById = (req,res) => {
    const id = req.params.id
    if (id > 17 || id <= 0){
        res.redirect(301, "https://expressjs.com/pt-br/4x/api.html#router")
    }
    console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (req,res) => {
    const id = req.params.id
    const al = alunas.find(aluna => aluna.id == id)
    console.log(al)

    if(!aluna){
        res.send("não encontrei essa aluna")
    }

    const livrosAlunas = aluna.livrosAlunas
    const tituloLivros = livros.map (livro => livro.titulo)
    res.status(200).send(tituloLivros)  
}

exports.getSp = (req,res) => {
    const naturalidadeSp = alunas.filter(alunas => alunas.nasceuEmSp.indexOf("true")> -1) 
    //(alunas => alunas.nasceuEmSp == "true") - outro jeito sem o indexOf
    const procuradas = naturalidadeSp.map(item => item.nome)
    res.status(200).send(procuradas)
}
   
exports.getAge = (req,res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    const dataDeNasc = aluna.dateOfBirth
    const arrData = dataDeNasc.split('/')
    const dia = arrData[0]
    const mes = arrData[1]
    const ano = arrData[2]
    const idade = calcularIdade(ano,mes,dia)
    res.status(200).send({idade})
}    

function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
      const now = new Date()
      const anoAtual = now.getFullYear()
      const mesAtual = now.getMonth() + 1
      const hoje = now.getDate()
    
      let idade = anoAtual - anoDeNasc
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }
      return idade
    }

    
