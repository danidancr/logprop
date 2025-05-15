const questoes = [
    {
        id: 1,
        titulo: "Proposições e Conectivos Lógicos",
        enunciado: `
            <p>(ENADE 2021) Um corpo de conhecimento representado na lógica proposicional utiliza os conectivos lógicos de implicação (→), conjunção (∧), disjunção (∨) e negação (-). Considere o seguinte conjunto de fórmulas:</p>
            <ol class="formulas">
                <li>a → -b</li>
                <li>b ∧ a</li>
                <li>-b ∨ b</li>
            </ol>
            <p>Sabendo que uma fórmula é uma tautologia se, e somente se, para toda atribuição de valores-verdade, sua avaliação é verdadeira, analise as afirmações a seguir:</p>
            <ol class="afirmacoes" type="I">
                <li>A fórmula 3 é uma tautologia.</li>
                <li>A fórmula 1 é uma tautologia.</li>
                <li>A fórmula 2 é uma tautologia.</li>
            </ol>
            <p class="pergunta">Quais estão corretas?</p>
        `,
        alternativas: [
            { letra: "A", texto: "Apenas I." },
            { letra: "B", texto: "Apenas II." },
            { letra: "C", texto: "Apenas III." },
            { letra: "D", texto: "Apenas I e II." },
            { letra: "E", texto: "I, II e III." }
        ],
        resposta: "A"
    },
    {
        id: 2,
        titulo: "Complexidade Algorítmica",
        enunciado: `
            <p><strong>QUESTÃO 12</strong></p>
            <p>Analise o custo computacional dos algoritmos a seguir, que calculam o valor de um polinômio de grau n:</p>
            <pre>Algoritmo 1:
soma = a[0]
para i = 1 até n
    se a[i] ≠ 0.0 então
        potência = x
        para j = 2 até i
            potência = potência * x
        fim para
        soma = soma + a[i] * potência
    fim se
fim para</pre>
            <pre>Algoritmo 2:
soma = a[n]
para i = n-1 até 0 passo -1
    soma = soma * x + a[i]
fim para</pre>
            <p>Com base nos algoritmos 1 e 2, avalie as asserções:</p>
            <ol class="afirmacoes" type="I">
                <li>Os algoritmos possuem a mesma complexidade assintótica.</li>
                <li>Para o melhor caso, ambos possuem complexidade O(n).</li>
            </ol>
            <p class="pergunta">A respeito dessas asserções, assinale a opção correta.</p>
        `,
        alternativas: [
            { letra: "A", texto: "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I." },
            { letra: "B", texto: "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I." },
            { letra: "C", texto: "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa." },
            { letra: "D", texto: "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira." },
            { letra: "E", texto: "As asserções I e II são proposições falsas." }
        ],
        resposta: "D"
    },
    {
        id: 3,
        titulo: "Classes de Problemas",
        enunciado: `
            <p><strong>QUESTÃO 40</strong> – Considere as seguintes afirmações sobre classes de problemas:</p>
            <ol class="afirmacoes" type="I">
                <li>O problema de decisão CAM (caminho em grafo) pertence à classe de complexidade P.</li>
                <li>Um problema X pertence à classe NP-completos quando X pertence à classe NP e todo problema Y da classe NP pode ser reduzido em tempo polinomial a X.</li>
                <li>Se um problema de decisão X pertence à classe P, então o complemento do problema X pertence à classe NP.</li>
            </ol>
            <p class="pergunta">Quais estão corretas?</p>
        `,
        alternativas: [
            { letra: "A", texto: "Apenas I." },
            { letra: "B", texto: "Apenas III." },
            { letra: "C", texto: "Apenas I e II." },
            { letra: "D", texto: "Apenas II e III." },
            { letra: "E", texto: "I, II e III." }
        ],
        resposta: "C"
    },
    {
        id: 4,
        titulo: "Forma Canônica de Expressões Lógicas",
        enunciado: `
            <p><strong>QUESTÃO 42</strong> – Uma expressão lógica do tipo soma de produtos está na forma canônica se cada um de seus mintermos contém todas as variáveis, seja na forma direta ou complementada.</p>
            <p>Assinale a alternativa que contém a expressão lógica, representada pela soma dos seus mintermos, cuja simplificação pela álgebra booleana fornece a expressão:</p>
            <p style="text-align: center">x = <span style="text-decoration: overline">AB</span> + <span style="text-decoration: overline">BC</span></p>
            <p class="pergunta">Qual é a expressão correta?</p>
        `,
        alternativas: [
            { letra: "A", texto: "f(A,B,C) = Σm(1,3,5)" },
            { letra: "B", texto: "f(A,B,C) = Σm(1,4,5)" },
            { letra: "C", texto: "f(A,B,C) = Σm(2,3,5)" },
            { letra: "D", texto: "f(A,B,C) = Σm(2,4,6)" },
            { letra: "E", texto: "f(A,B,C) = Σm(2,5,6)" }
        ],
        resposta: "E"
    },
    {
        id: 5,
        titulo: "Metadados de Arquivos",
        enunciado: `
            <p><strong>QUESTÃO 40</strong> – Os sistemas operacionais mantêm várias informações sobre cada arquivo, chamadas de metadados.</p>
            <p class="pergunta">Assinale o atributo que NÃO é um metadado de arquivo gerenciado pelo sistema operacional:</p>
        `,
        alternativas: [
            { letra: "A", texto: "Data da criação do arquivo." },
            { letra: "B", texto: "Tamanho do registro (ex.: número em bytes do registro)." },
            { letra: "C", texto: "Tamanho atual do arquivo (ex.: número máximo em bytes do arquivo)." },
            { letra: "D", texto: "Flag (indicador) de tipo de arquivo (ex.: sistema/normal)." },
            { letra: "E", texto: "Nome dos diferentes campos lógicos representados nos registros dos arquivos (ex.: id, nome, data de nascimento, etc.)." }
        ],
        resposta: "E"
    },
    {
        id: 6,
        titulo: "Teoremas da Computação",
        enunciado: `
            <p><strong>QUESTÃO 38</strong> – O _____, de _____, demonstra limitações dos sistemas formais e a impossibilidade de provar certas afirmações dentro deles. Já o _____, de _____, pergunta se um determinado programa irá eventualmente parar ou entrar em um loop infinito para uma entrada dada.</p>
            <p class="pergunta">Assinale a alternativa que preenche corretamente as lacunas:</p>
        `,
        alternativas: [
            { letra: "A", texto: "Teorema da Incompletude – Alan Turing – Problema da Parada – Kurt Gödel" },
            { letra: "B", texto: "Teorema da Incompletude – Kurt Gödel – Problema da Parada – Alan Turing" },
            { letra: "C", texto: "Problema da Parada – Alan Turing – Teorema da Incompletude – Kurt Gödel" },
            { letra: "D", texto: "Problema da Parada – Kurt Gödel – Teorema da Incompletude – Alonzo Church" },
            { letra: "E", texto: "Teorema da Incompletude – Alonzo Church – Problema da Parada – Alan Turing" }
        ],
        resposta: "B"
    },
    {
        id: 7,
        titulo: "Lógica Proposicional",
        enunciado: `
            <p><strong>QUESTÃO 21</strong> – Na lógica proposicional, considere a sentença:</p>
            <p>"Um veículo que é elétrico (E) pode ser um robô (R) se for autônomo (A), caso contrário não é um robô (R)"</p>
            <p>E as proposições:</p>
            <ul>
                <li>P1 = (E ∧ R) ↔ A</li>
                <li>P2 = E → (R ↔ A)</li>
                <li>P3 = E → ((A → R) ∨ ¬R)</li>
            </ul>
            <p class="pergunta">A sentença pode ser representada por:</p>
        `,
        alternativas: [
            { letra: "A", texto: "P2, apenas." },
            { letra: "B", texto: "P3, apenas." },
            { letra: "C", texto: "P1 e P2, apenas." },
            { letra: "D", texto: "P1 e P3, apenas." },
            { letra: "E", texto: "P1, P2 e P3." }
        ],
        resposta: "A"
    },
    {
        id: 8,
        titulo: "Grafos e Árvores",
        enunciado: `
            <p><strong>QUESTÃO NOVA 1</strong> – Sobre estruturas de dados para grafos e árvores:</p>
            <ol class="afirmacoes" type="I">
                <li>Uma árvore binária de busca balanceada tem complexidade O(log n) para operações de busca, inserção e remoção.</li>
                <li>O algoritmo de Dijkstra pode ser utilizado para encontrar o caminho mínimo em grafos com arestas de peso negativo.</li>
                <li>Todo grafo euleriano é também hamiltoniano, mas a recíproca não é verdadeira.</li>
            </ol>
            <p class="pergunta">Quais afirmações estão corretas?</p>
        `,
        alternativas: [
            { letra: "A", texto: "Apenas I." },
            { letra: "B", texto: "Apenas II." },
            { letra: "C", texto: "Apenas I e III." },
            { letra: "D", texto: "Apenas II e III." },
            { letra: "E", texto: "I, II e III." }
        ],
        resposta: "A"
    },
    {
        id: 9,
        titulo: "Banco de Dados",
        enunciado: `
            <p><strong>QUESTÃO NOVA 2</strong> – Sobre normalização de bancos de dados relacionais:</p>
            <ol class="afirmacoes" type="I">
                <li>A Primeira Forma Normal (1FN) exige que todos os atributos sejam atômicos e que não existam grupos repetitivos.</li>
                <li>Uma tabela na Terceira Forma Normal (3FN) está automaticamente na Forma Normal de Boyce-Codd (FNBC).</li>
                <li>A Segunda Forma Normal (2FN) elimina dependências parciais de chaves primárias compostas.</li>
            </ol>
            <p class="pergunta">Quais afirmações estão corretas?</p>
        `,
        alternativas: [
            { letra: "A", texto: "Apenas I." },
            { letra: "B", texto: "Apenas III." },
            { letra: "C", texto: "Apenas I e II." },
            { letra: "D", texto: "Apenas I e III." },
            { letra: "E", texto: "I, II e III." }
        ],
        resposta: "D"
    },
    {
        id: 10,
        titulo: "Redes de Computadores",
        enunciado: `
            <p><strong>QUESTÃO NOVA 3</strong> – Sobre protocolos de rede:</p>
            <ol class="afirmacoes" type="I">
                <li>O protocolo TCP fornece controle de fluxo e congestionamento, enquanto o UDP não fornece esses mecanismos.</li>
                <li>O DNS utiliza tanto o protocolo TCP quanto o UDP, dependendo do tipo de operação.</li>
                <li>O protocolo HTTP/2 introduziu o multiplexing de requisições, permitindo várias requisições simultâneas em uma única conexão TCP.</li>
            </ol>
            <p class="pergunta">Quais afirmações estão corretas?</p>
        `,
        alternativas: [
            { letra: "A", texto: "Apenas I." },
            { letra: "B", texto: "Apenas II." },
            { letra: "C", texto: "Apenas I e III." },
            { letra: "D", texto: "Apenas II e III." },
            { letra: "E", texto: "I, II e III." }
        ],
        resposta: "E"
    }
];
// Variáveis CSS necessárias
document.documentElement.style.setProperty('--primary', '#1094e0');
document.documentElement.style.setProperty('--primary-dark', '#0d7bb8');
document.documentElement.style.setProperty('--success', '#4CAF50');
document.documentElement.style.setProperty('--shadow', '0 2px 10px rgba(0,0,0,0.1)');
document.documentElement.style.setProperty('--text', '#333');

// Variáveis de Estado
let questaoAtual = 0;
let respostasUsuario = [];
let tempoInicio;
let acertos = 0;

// Elementos DOM
const exercicioContainer = document.getElementById('exercicio-container');
const marcadoresContainer = document.getElementById('marcadores-exercicios');
const progressoCompleto = document.getElementById('progresso-completo');
const btnResponder = document.getElementById('botao-responder');

// Inicialização
function init() {
    tempoInicio = new Date(); // Inicia o cronômetro
    
    if (!exercicioContainer || !marcadoresContainer || !progressoCompleto || !btnResponder) {
        console.error("Elementos do DOM não encontrados!");
        return;
    }
    
    carregarQuestao(0);
    criarMarcadores();
    atualizarProgresso();
    configurarEventos();
}

function mostrarResultados() {
    const tempoFim = new Date();
    const tempoTotal = Math.floor((tempoFim - tempoInicio) / 1000); // Tempo em segundos
    
    exercicioContainer.innerHTML = `
        <div class="resultados-container">
            <h2><i class="fas fa-trophy"></i> Exercício Concluído!</h2>
            
            <div class="resultado-item">
                <div class="resultado-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="resultado-info">
                    <div class="resultado-valor">${acertos}/${questoes.length}</div>
                    <div class="resultado-label">Questões acertadas</div>
                </div>
            </div>
            
            <div class="resultado-item">
                <div class="resultado-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="resultado-info">
                    <div class="resultado-valor">${formatarTempo(tempoTotal)}</div>
                    <div class="resultado-label">Tempo total</div>
                </div>
            </div>
            
            <button class="botao-home" id="botao-home">
                <i class="fas fa-home"></i> Voltar para Home
            </button>
        </div>
    `;
    
    // Configura o botão de voltar para home
    document.getElementById('botao-home').addEventListener('click', () => {
        window.location.href = 'home.html';
    });
    
    // Esconde a barra de progresso e o botão de responder
    document.querySelector('.barra-progresso').style.display = 'none';
    btnResponder.style.display = 'none';
}

// Função auxiliar para formatar o tempo
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
}

// Carrega uma questão específica
function carregarQuestao(indice) {
    if (indice < 0 || indice >= questoes.length) return;
    
    questaoAtual = indice;
    const questao = questoes[indice];
    
    exercicioContainer.innerHTML = `
        <div class="questao-atual">
            <h2>Questão ${questao.id}: ${questao.titulo}</h2>
            <div class="enunciado">${questao.enunciado}</div>
            <form class="alternativas" id="form-alternativas">
                ${questao.alternativas.map(alt => `
                    <label class="alternativa">
                        <input type="radio" name="resposta" value="${alt.letra}">
                        <span class="letra-alternativa">${alt.letra})</span>
                        <span class="texto-alternativa">${alt.texto}</span>
                    </label>
                `).join('')}
            </form>
        </div>
    `;
    
    // Configura eventos das alternativas
    document.querySelectorAll('.alternativa').forEach(alt => {
        alt.addEventListener('click', function() {
            document.querySelectorAll('.alternativa').forEach(a => {
                a.classList.remove('selecionada');
            });
            this.classList.add('selecionada');
            btnResponder.disabled = false;
        });
    });
}

// Cria os marcadores da barra de progresso
function criarMarcadores() {
    marcadoresContainer.innerHTML = '';
    
    questoes.forEach((_, index) => {
        const marcador = document.createElement('div');
        marcador.className = 'marcador';
        marcador.innerHTML = `<span>${index + 1}</span>`;
        
        marcador.addEventListener('click', () => {
            carregarQuestao(index);
        });
        
        marcadoresContainer.appendChild(marcador);
    });
}

// Atualiza a barra de progresso
function atualizarProgresso() {
    const percentual = (questaoAtual / (questoes.length - 1)) * 100;
    progressoCompleto.style.width = `${percentual}%`;
    
    // Atualiza marcadores
    const marcadores = document.querySelectorAll('.marcador');
    marcadores.forEach((marcador, index) => {
        marcador.classList.remove('ativo', 'concluido');
        
        if (index === questaoAtual) {
            marcador.classList.add('ativo');
        }
    });
}

// Configura eventos dos botões
function configurarEventos() {
    btnResponder.addEventListener('click', () => {
        const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
        
        if (respostaSelecionada) {
            // Verifica se a resposta está correta
            if (respostaSelecionada.value === questoes[questaoAtual].resposta) {
                acertos++;
            }
            
            respostasUsuario[questaoAtual] = respostaSelecionada.value;
            
            // Avança para próxima questão ou mostra resultados
            if (questaoAtual < questoes.length - 1) {
                carregarQuestao(questaoAtual + 1);
                atualizarProgresso();
            } else {
                mostrarResultados();
            }
        }
    });
}

// Inicia a aplicação quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}