# 📊 Classificador de Desempenho

Este projeto é uma aplicação web simples desenvolvida com **HTML, CSS e JavaScript** que classifica o desempenho de um aluno com base em uma nota informada (0 a 10).

---

## 📌 Objetivo

Criar um sistema interativo onde o usuário:

* Digita uma nota entre **0 e 10**
* Clica no botão **"Analisar"**
* Recebe um **feedback automático** com a classificação do desempenho
* Visualiza a mensagem com **cores diferentes** de acordo com o resultado

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript

---

## 📂 Estrutura do Projeto

```
📁 classificador-desempenho
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 💻 Funcionalidades

O sistema classifica a nota da seguinte forma:

| Nota    | Resultado                         | Cor      |
| ------- | --------------------------------- | -------- |
| > 10    | Nota inválida                     | Vermelho |
| < 0     | Nota inválida                     | Vermelho |
| 9 - 10  | Desempenho: Excelente             | Verde    |
| 7 - 8.9 | Desempenho: Bom                   | Verde    |
| 5 - 6.9 | Desempenho: Regular (Recuperação) | Laranja  |
| 0 - 4.9 | Desempenho: Insuficiente          | Vermelho |

---

## 🎨 Estilização

* Fundo cinza claro
* Caixa branca centralizada
* Bordas arredondadas
* Layout simples e responsivo

---

## 🚀 Como Executar

1. Baixe ou clone o projeto
2. Abra o arquivo index.html no navegador
3. Digite uma nota e clique em **Analisar**

---

## 📚 Aprendizados

Com esta atividade é possível praticar:

* Manipulação do DOM
* Estruturas condicionais
* Captura de dados do usuário
* Alteração dinâmica de conteúdo e estilo
* Organização básica de projeto web
