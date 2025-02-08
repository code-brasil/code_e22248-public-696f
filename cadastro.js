document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;
  const response = await fetch('http://localhost:8000/functions/code_e22248/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, confirm })
  });
  const data = await response.json();
  document.getElementById('msg').innerText = data.message || (data.status === 'success' ? 'Registrado com sucesso!' : 'Erro no cadastro.');
});