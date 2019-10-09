const alunas = require('../model/alunas.json')


exports.get = (req,res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}
exports.getById = (req,res) => {
    const id = req.params.id
    console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}
exports.getBooks = (req,res) => {
    const id = req.params.id
    const al = alunas.find(aluna => aluna.id == id)
    console.log(al)

    const livrosAlunas = aluna.livrosAlunas
    const tituloLivros = livros.map (livro => livro.titulo)
    res.status(200).send(tituloLivros)
    
    //const livros = alunas.map(item => {
    //  console.log(item.livros)
    //})
    
}
   