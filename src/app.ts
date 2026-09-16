// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express, Request, Response } from "express";

// Importar a classe Player do arquivo Player.ts
// Por que Player.ts deve ser importado com a extensão .js?
// Acesse: https://notpad.org/aula1609

import { Player } from "./models/Player.js";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Middleware para permitir que o servidor aceite
// requisições com corpo em formato JSON
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Cria um noovo player com o nome "Jogador1", 100 de vida e nível 1
const player = new Player("Yuki", 100, 1);

// Rota GET para obter informações sobre o player
// Quando um usuário acessar a rota "/player" via GET, o servidor
//irá retonar suas informações em formato JSON.
app.get("/player", (req: Request, res: Response) => {
  res.json({
    message: "Informações player",
    player: player,
  });
});
// Rota POST para atacar o Player
// Quando um usuario acessar a rota "/player/attack" via POST, o servidor 
// irá chamar o método attack() do player e retornar a mansagem resultante.
app.post("/player/attack", (req: Request, res: Response) => {
  // Chamar o método attack() do player e armazenar a mensagem retornada
  const attackManssage = player.attack();
  res.json({
    massagem: attackManssage,
  });

});

app.post("/player/damage", (req: Request, res: Response) => {
  // Extrair o valor de dano do corpo da requisição
  const { damage } = req.body;
  // Chamar o método attack() do Player e armazenar a mensagem retornada
  const damageMessage = player.takeDamage(damage);
  res.json({
    //  Retornar a mansagem de dano, a vida atual e o nível atual do player
    action: damageMessage,
    //Retornar a vida atual e o nível atual do Player
    currentHealth: player.health,
    // Retornar o nível atual do player
    currentLevel: player.level
  });
});
// O "Damage" é o mesmo codigo que o "heal"
app.post("/player/heal", (req: Request, res: Response) => {
  const { heal } = req.body;
  const healMessage = player.takeHeal(heal);
  res.json({
    action: healMessage,
    currentHealth: player.health,
    currentLevel: player.level 
  });
})

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Rotas Disponiveis");
  console.log(`GET http://localhost:${PORT}/player - Obter informações domplayer`);
  console.log(`POST http://localhost:${PORT}/player/attack - atacar o player`);
  console.log(`POST http://localhost:${PORT}/player/damage - Causar dano ao player`);
  console.log(`POST http://localhost:${PORT}/player/heal - Cura o player`);
});