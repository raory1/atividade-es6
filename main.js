class List{
    constructor(){
        this.data = []
    }

    add(nome){
        this.data.push(nome);
        console.log(this.data);
    }
}

class ToList extends List{
    constructor(){
        super();
        this.usuario = 'Isabella';
    }

    getUsuario(){
        console.log(this.usuario)
    }

    static soma(a,b){
        
        return this.usuario;
    }
}

//const tolist = new ToList()

//document.getElementById('novotodo').onclick = function(){
//   tolist.add('joao');
//    tolist.getUsuario();
//}

const nome = {primeiro_nome: "Lucas"};
nome.primeiro_nome = 'joao'
console.log(nome)

function teste(x){
    let y = 4;
    if(x>2) {
        y=6
        console.log(x,y)
    }
}

console.log(teste(10))