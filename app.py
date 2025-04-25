from flask import Flask, render_template, request, redirect, url_for, flash
from database import db, Usuario
from werkzeug.security import generate_password_hash

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta_aqui'  # Necessário para flash messages

# Configuração do Neon
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://neondb_owner:npg_5e7IbQcGNHKF@ep-withered-dust-a4gabw0j-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Conecta o banco ao app
db.init_app(app)

# Cria as tabelas (executa só uma vez!)
with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cadastrar', methods=['GET', 'POST'])
def cadastrar():
    if request.method == 'POST':
        nome = request.form.get('nome')
        email = request.form.get('email')
        senha = request.form.get('senha')
        confirm_senha = request.form.get('confirm_senha')
        
        # Validações básicas
        if not nome or not email or not senha or not confirm_senha:
            flash('Todos os campos são obrigatórios!', 'error')
            return redirect(url_for('cadastrar'))
        
        if len(senha) < 6:
            flash('A senha deve ter pelo menos 6 caracteres!', 'error')
            return redirect(url_for('cadastrar'))
        
        if senha != confirm_senha:
            flash('As senhas não coincidem!', 'error')
            return redirect(url_for('cadastrar'))
        
        # Verifica se email já existe
        if Usuario.query.filter_by(email=email).first():
            flash('Este email já está cadastrado!', 'error')
            return redirect(url_for('cadastrar'))
        
        # Cria novo usuário
        novo_usuario = Usuario(nome=nome, email=email)
        novo_usuario.set_senha(senha)
        
        try:
            db.session.add(novo_usuario)
            db.session.commit()
            flash('Cadastro realizado com sucesso! Faça login para continuar.', 'success')
            return redirect(url_for('entrar'))
        except Exception as e:
            db.session.rollback()
            flash('Erro ao cadastrar. Tente novamente mais tarde.', 'error')
            return redirect(url_for('cadastrar'))
    
    return render_template('cadastrar.html')

@app.route('/entrar')
def entrar():
    return render_template('entrar.html')

if __name__ == '__main__':
    app.run(debug=True)