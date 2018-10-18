

export function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

export function subtrair(numero1: number, numero2: number): any {
    return numero1 - numero2;
}

export function multiplicar(numero1: number, numero2: number): any {
    return numero1 * numero2;
}


interface Pessoa {
    nome: string;
    email?: string;
}


let obj: Pessoa = {
    nome: ""
};



