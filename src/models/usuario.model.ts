export class Usuario{
    constructor(
        public nome:string,
        public email: string,
        public data_nascimento:string,
        public senha: string,
        public sexo:string,
        public uf: string,
        public cidade: string,
        public newsletter: boolean,
        public termos: boolean
    ){}
}