document.getElementById('recuperarForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const response = await fetch('http://localhost:8000/functions/code_e22248/forgot_password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  const data = await response.json();
  document.getElementById('msg').innerText = data.message;
});