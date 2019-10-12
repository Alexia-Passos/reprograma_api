const professoras = require('../model/professoras.json')

exports.get = (req,res) => {
    console.log(req.url)
    res.status(200).send(professoras)
}

exports.getLista = (req,res) => {
    const profSemCpf = professoras.map (item => {
        item.cpf = '*********';
        return item
    })
   res.status(200).send(profSemCpf)  
}

exports.getByIdProfa = (req,res) =>{
    const id = req.params.id
    res.status(200).send(profSemCpf.find(item => item.id == id))
    
}




//     const arrSemCpf = []
//     for(let i=0; i<professoras.length; i++)  
//     const semCpf = {}
//     semCpf.id = professoras[i].id
//     semCpf.nome = professoras[i].nome
//     semCpf.especialidade = professoras[i].especialidade
//     semCpf.signo = professoras[i].signo

//     arrSemCpf.push(semCpf)

//     res.status(200).send(arrSemCpf)  
//     }
    

