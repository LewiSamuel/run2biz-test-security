class MyPassword {

    private password: number;
    public erros: string[];

    /**
     * define novo valor de password
     * @param value passowrd
     */
    set(value) {
        this.password = value;
    }

    /**
     * obtem valor de password
     * @returns return password
     */
    get() {
        return this.password;
    }

    /**
     * Valida password
     * @returns boolean
     */
    validate() {
        let string = this.password.toString();
        let regexp = /00|11|22|33|44|55|66|77|88|99/g;
        let match = string.match(regexp);
        let valid = true;
        let maiorNumero = 0;
        let _error:string[] = [];

        /**
         * Valida se a senha esta dentro do range permitido
         * 184759-856920
         */
        if(this.password < 184759)
        _error.push("Senha não pode ser menor que 184759.")

        if(this.password > 856920)
        _error.push("Senha não pode ser maior que 856920.")

        /**
         * Valida se foi encotrado alguma dupla
         * */ 
        if (match) {
            // Valida se o proximo numero não é igual ao da dupla
            // Valida se entre as duplas encontradas existe mais de uma igual ao primeiro match
            // valida se entre as duplas encontradas existe outras difretente ao primeiro match
            if (string.charAt(string.indexOf(match[0]) + 2) === match[0].charAt(0) &&
                match.filter(x => x == match[0]).length <= 1 &&
                match.filter(x => x !== match[0]).length == 0) {
                
                    _error.push("Tripla encontrada sem acompanhada de algum par.");
            }
        }else{
            _error.push("Nenhuma dupla encontrada.")
        }
     
        /**
         * valida se os digitos estão em ordem crescente ou igual
         */
        for(let index = 0; index < string.length; index++) {
            let letter = parseInt(string.charAt(index));
            if (letter >= maiorNumero)
                maiorNumero = letter;
            else
                valid = false;
        }
        if(!valid)
        _error.push("Digitos não estão em ordem crescente.");

        this.erros = _error;
         
        return _error.length === 0;
    }
}

export default new MyPassword();