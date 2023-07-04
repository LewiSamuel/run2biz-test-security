import fs from 'fs';
class MyAddress {

    public commands: string = "";
    public erros: string[] = [];
    public instrucoes: string[] = [];
    public address: number = 0;

    constructor(){
        this.address = 0;
        this.instrucoes = [];
    }

    /**
     * Setar comando
     * @param value arquivo da requisicao post
     */
    set(value) {
        let _commands = fs.readFileSync(value.path, 'utf8');
        this.commands = _commands;
    }
    

    /**
     * obtem valor de password
     * @returns return password
     */
    get() {
        return this.commands;
    }

    /**
     * Processa os comandos inseridos e calcula o endereço
     * @returns endereço
     */
    calcular() {
        this.address = 0;
        this.instrucoes = [];

        let lines = this.commands.split("\n");

        for (let index = 0; index < lines.length; index++) {
            let command = lines[index];

            // Adiciona x valor ao endreço
            if (command.substring(0, 2) === "20") {
                let addAdress = parseInt(command.substring(2));
                this.address += addAdress;
                this.instrucoes.push("Adiciona " + addAdress + " endereço.")

            // pula x instruçoes
            } else if (command.substring(0, 1) === "5") {
                let jump = command.substring(1);
                index += parseInt(jump) - 1;
                this.instrucoes.push("Pula " + command.substring(1) + " instrucoes.")

            } else {
                this.instrucoes.push("Comando inválido.")
            }
        }

        this.instrucoes.push("Endereço = " + this.address);
        return this.address;
    }


}

export default new MyAddress();