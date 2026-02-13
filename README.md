# 📊 Sistema Web Interativo

## 🎓 Classificador de Desempenho + 🚪 Sistema de Portaria

Este repositório reúne **duas aplicações web simples** desenvolvidas com **HTML, CSS e JavaScript**, com foco em lógica condicional, manipulação do DOM e interatividade.

---

# 🧮 1️⃣ Classificador de Desempenho

## 📌 Objetivo

Criar um sistema onde o usuário:

* Digita uma **nota entre 0 e 10**
* Clica em **"Analisar"**
* Recebe um **feedback automático**
* Visualiza o resultado com **cores diferentes**

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

## 📂 Estrutura

```
📁 classificador-desempenho
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 📚 Aprendizados

* Manipulação do DOM
* Estruturas condicionais
* Entrada de dados do usuário
* Alteração dinâmica de conteúdo e estilo
* Organização de projeto web

---

# 🚪 2️⃣ Sistema de Portaria

## 📌 Objetivo

Simular um sistema de controle de acesso onde:

* O usuário digita **nome**
* Informa a **hora atual**
* O sistema verifica se a pessoa está autorizada
* O acesso é permitido ou negado com base no **horário e cadastro**

---

## 💻 Funcionalidades

O sistema possui uma lista interna de pessoas autorizadas:

```javascript
let autorizados = ["caio", "nicolas", "avanze", "dronha", "bertaco", "vitor"];
```

### 🔎 Regras de Acesso

| Condição                     | Resultado             | Cor      |
| ---------------------------- | --------------------- | -------- |
| Nome não cadastrado          | Acesso negado         | Vermelho |
| Autorizado + entre 6h e 21h  | Acesso permitido      | Verde    |
| Autorizado + entre 22h e 23h | Horário não permitido | Vermelho |
| Horário inválido             | Mensagem de erro      | Laranja  |

---

## 📂 Estrutura

```
📁 sistema-portaria
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 🎨 Estilização

* Fundo cinza claro
* Painel branco centralizado
* Bordas arredondadas
* Botão estilizado em azul
* Feedback visual com cores dinâmicas

---

## 🚀 Como Executar os Projetos

1. Baixe ou clone o repositório
2. Acesse a pasta desejada
3. Abra o arquivo `index.html` no navegador
4. Interaja com o sistema

---

## 🧠 Conceitos Trabalhados

Ambas as atividades permitem praticar:

* `if / else if / else`
* Método `.includes()`
* Conversão de dados (`Number()`, `toLowerCase()`)
* Manipulação de elementos com `getElementById`
* Alteração de `innerHTML`
* Alteração de estilo via JavaScript
* Organização de arquivos (HTML, CSS, JS)

---

## 🏆 Conclusão

Esses projetos são ideais para quem está iniciando no desenvolvimento web e deseja fortalecer a base em **lógica de programação com JavaScript**, além de compreender melhor como funciona a interação entre **HTML, CSS e JS**.

Se desejar, posso organizar tudo em um único projeto com menu para alternar entre as duas funcionalidades 😉
