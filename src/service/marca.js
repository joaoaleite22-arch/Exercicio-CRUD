import Marca from '../model/marca.js'

class ServiceMarca {
    
    Buscar() {

        return Marca.Buscar()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }
        return Marca.BuscarUm(id)
    }

    Criar(marca) {
        if(!marca) {
            throw new Error("Favor informar a marca")
        }

        Marca.Criar(marca)
    }

    Alterar(id, marca) {
         if(!id || isNaN(id) || !nome){
            throw new Erros("Favor informar todos os dados")
         }
         Marca.Alterar(id, marca)
    }

    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o id corretamente")
        }
        Marca.Deletar(id)
    }

}

export default new ServiceMarca()