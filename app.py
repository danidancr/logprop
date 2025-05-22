from flask import Flask, render_template, request, redirect, url_for, session, jsonify, flash
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
from functools import wraps
import random

app = Flask(__name__)
app.secret_key = 'uma_chave_secreta_muito_forte_aqui'
app.config['SESSION_PERMANENT'] = True
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1)
app.config['TEMPLATES_AUTO_RELOAD'] = True

# Banco de dados simulado
users_db = {}

# Perguntas organizadas por categoria
questions_db = {
    'proposicoes': [
        {
            'pergunta': 'Qual das alternativas abaixo é uma proposição?',
            'respostas': ['Feche a porta.', 'O céu é azul.', 'Por que você fez isso?', 'Leia o livro.'],
            'correta': 1,
            'explicacao': 'Proposição é uma sentença declarativa que pode ser verdadeira ou falsa. “O céu é azul” é uma proposição.'
        }
    ],
    'tabelas': [
        {
            'pergunta': 'Qual é o valor lógico de “p ∧ q” se p = V e q = F?',
            'respostas': ['V', 'F', 'Indeterminado', 'Não é possível saber'],
            'correta': 1,
            'explicacao': 'A conjunção (∧) só é verdadeira se ambas as proposições forem verdadeiras. Nesse caso, p = V e q = F, então p ∧ q = F.'
        }
    ]
}

questions_db['todos'] = sum(questions_db.values(), [])

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user' not in session:
            flash('Você precisa estar logado para acessar esta página.', 'error')
            return redirect(url_for('entrar'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cadastrar', methods=['GET', 'POST'])
def cadastrar():
    erro = None
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirmPassword')

        if not all([name, email, password, confirm_password]):
            erro = 'Todos os campos são obrigatórios'
        elif password != confirm_password:
            erro = 'As senhas não coincidem'
        elif len(password) < 6:
            erro = 'A senha deve ter pelo menos 6 caracteres'
        elif email in users_db:
            erro = 'E-mail já cadastrado'

        if not erro:
            users_db[email] = {
                'name': name,
                'password': generate_password_hash(password),
                'progresso': {},
                'registro': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
            flash('Cadastro realizado com sucesso!', 'success')
            return redirect(url_for('entrar'))

    return render_template('cadastrar.html', erro=erro)

@app.route('/entrar', methods=['GET', 'POST'])
def entrar():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        if not email or not password:
            flash('Preencha todos os campos', 'error')
            return render_template('entrar.html')

        user = users_db.get(email)
        if user and check_password_hash(user['password'], password):
            session['user'] = {'email': email, 'name': user['name']}
            flash('Login realizado com sucesso!', 'success')
            return redirect(url_for('home'))

        flash('E-mail ou senha incorretos', 'error')
        return render_template('entrar.html')

    return render_template('entrar.html')

@app.route('/home')
@login_required
def home():
    email = session['user']['email']
    progresso = users_db[email].get('progresso', {})
    return render_template('home.html', assuntos=questions_db.keys(), progresso=progresso)

@app.route('/minha_conta')
@login_required
def minha_conta():
    email = session['user']['email']
    usuario = users_db.get(email)
    return render_template('minha_conta.html',
                           user=session['user'],
                           registro=usuario.get('registro', 'Data não disponível'),
                           progresso=usuario.get('progresso', {}))

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('index'))

@app.route('/relatorio')
@login_required
def relatorio():
    email = session['user']['email']
    progresso = users_db[email].get('progresso', {})

    total_questoes = sum(len(qs) for qs in questions_db.values())
    acertos = sum(p.get('acertos', 0) for p in progresso.values())
    erros = sum(p.get('erros', 0) for p in progresso.values())
    tempos = sum((p.get('tempos', []) for p in progresso.values()), [])

    tempo_medio_str = f'{sum(tempos) / len(tempos):.2f}s' if tempos else 'N/A'

    percentual_geral = (acertos / (acertos + erros)) if (acertos + erros) > 0 else 0
    if percentual_geral > 0.8:
        feedback = 'Excelente desempenho! Continue assim!'
    elif percentual_geral > 0.5:
        feedback = 'Você está indo bem, mas ainda pode melhorar!'
    else:
        feedback = 'Ainda há muito a aprender, não desista!'

    por_assunto = []
    for assunto, dados in progresso.items():
        total = dados.get('acertos', 0) + dados.get('erros', 0)
        percentual = (dados.get('acertos', 0) / total * 100) if total else 0
        por_assunto.append({
            'assunto': assunto,
            'acertos': dados.get('acertos', 0),
            'erros': dados.get('erros', 0),
            'percentual_acertos': percentual,
            'tempo': dados.get('tempo', 0)
        })

    return render_template('relatorio.html', 
                           progresso_geral=int(percentual_geral * 100),
                           total_questoes=total_questoes,
                           acertos=acertos,
                           erros=erros,
                           tempo_medio=tempo_medio_str,
                           por_assunto=por_assunto,
                           feedback=feedback)

@app.route('/assunto/<assunto_id>')
@login_required
def assunto(assunto_id):
    if assunto_id not in questions_db:
        flash('Assunto não encontrado', 'error')
        return redirect(url_for('home'))

    questoes = [
        {
            'id': i + 1,
            'pergunta': q['pergunta'],
            'respostas': q['respostas'],
            'correta': q['correta'],
            'explicacao': q.get('explicacao', '')
        } for i, q in enumerate(questions_db[assunto_id])
    ]

    return render_template('assunto.html',
                           assunto=assunto_id,
                           usuario=session['user']['email'],
                           questoes=questoes,
                           total_questoes=len(questoes))

@app.route('/api/salvar_progresso', methods=['POST'])
@login_required
def salvar_progresso():
    data = request.get_json()
    email = session['user']['email']
    assunto = data.get('assunto')
    acertos = data.get('acertos', 0)
    total = data.get('total', 0)
    tempo = data.get('tempo', 0)

    if not all([email, assunto, total]):
        return jsonify({'success': False, 'error': 'Dados incompletos'}), 400

    users_db[email].setdefault('progresso', {}).setdefault(assunto, {'acertos': 0, 'erros': 0, 'tempo': 0, 'tempos': []})
    progresso = users_db[email]['progresso'][assunto]
    progresso['acertos'] += acertos
    progresso['erros'] += (total - acertos)
    progresso['tempo'] += tempo
    progresso['tempos'].append(tempo)

    return jsonify({'success': True, 'progresso': progresso})

@app.route('/api/questao/<assunto_id>', methods=['GET'])
@login_required
def get_questao(assunto_id):
    if assunto_id not in questions_db or not questions_db[assunto_id]:
        return jsonify({'error': 'Assunto não encontrado'}), 404

    questao = random.choice(questions_db[assunto_id])
    return jsonify(questao)

@app.route('/api/relatorio/<email>')
@login_required
def api_relatorio(email):
    if session['user']['email'] != email:
        return jsonify({'error': 'Acesso negado'}), 403

    usuario = users_db.get(email)
    progresso = usuario.get('progresso', {})
    return jsonify([{
        'assunto': a,
        'acertos': d.get('acertos', 0),
        'erros': d.get('erros', 0),
        'tempo': d.get('tempo', 0)
    } for a, d in progresso.items()])

@app.route('/dados')
def obter_dados():
    return jsonify({
        "acertos": 75,
        "erros": 25,
        "tempo_medio": "1m 32s",
        "categorias": {
            "Operadores": 10,
            "Tabelas Verdade": 5,
            "Equivalências": 7,
            "Negações": 3
        }
    })

if __name__ == '__main__':
    app.run(debug=True)
