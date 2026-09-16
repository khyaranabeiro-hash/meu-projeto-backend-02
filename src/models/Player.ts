/* 
A palavra-chave "export" é usada para exportar a classe Player,
permitindo que ela seja importada e ultilizada em outros arquivos do projeto.
A palavra-chave "class" é usada para definir uma classe TypeScript.
*/

export class Player {
    /* A palavra-chave "públic" é usada paea definir propriedades 
    públicas da classe, que podem ser acessadas de fora da classe.*/
    public name: string; // O nome do Player (texto)
    public health: number; // A saúde do player (número)
    public level: number; // O nível do player (número)
    public heal: number;


    // CONSTRUTOR DA CLASSE PLAYER
    // O construtor é um método especial que é chamado quando
    //uma nova instância da classe é criada.
    constructor(name: string, health: number = 100, level: number = 1) {
        // A palavra-chave "this" é usada para se referir á instância atual
        //da classe. Ou seja: "Pegue o atributo 'health' da classe Player e atribua o valor
        //de 'health' = 100 a ele".
        this.name = name; // Inicializa o nome do Plaer
        this.health = health; // Inicializa a saúde do Player
        this.level = level; // Inicializa o nível do player
    }

    // MÉTODOS DA CLASSE PLAYER
    // Métodos são funções que pertencem a uma classe e podem ser
    //chamdas em instâncias dessa classe.
    //o método "attack" é usado para atacar outro player, reduzindo sua saúde.
    public attack(): string {
        //Calcula o dano com base no nível do Player
        const damage = this.level * 10;
        // A plavra-chave "return" é usada para retornar um valor
        //de uma função ou método.
        return `O Player ${this.name} atacou e causou ${damage} de Dano!`;
    }

// O método "takeDamage" é usada para receber dano de outro Player,
// reduzindo a saúde do player.
public takeDamage(damage: number): string {
    // Reduz a saúde do Player com base no dano recebido
    this.health -= damage;
    // Verifica se a saúde do player caiu para 0 ou menos
    if (this.health <= 0) {
        this.health = 0; // Garante que a saúde não seja negativa
        return `O player ${this.name} foi derrotado!`;
    }
    return `O player ${this.name} recebeu ${damage} de dano e agora tem ${this.health} de saúde`;
}

public takeHeal(heal: number): string {
    this.health += heal;
    if (this.health <= 100) {
        this.health = 100; 
        return `O player ${this.name} não pode ser mais curado!`;
    }
    return `O player ${this.name} recebeu ${heal}
    de cura! e agora tem ${this.health} de saúde`;
}

}