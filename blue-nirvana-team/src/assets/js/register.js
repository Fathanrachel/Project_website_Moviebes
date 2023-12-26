function registerUser() {
  // Ambil nilai dari formulir
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validasi formulir
  if (!username || !email || !password) {
    showToast('Registration Failed. Please fill all coloumn', 'danger');
    return;
  }

  // Data pengguna baru
  let newUser = {
    username: username,
    email: email,
    password: password
  };

  // Ambil data di localStorage
  let existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  existingUsers.push(newUser);

  // Simpan data ke dalam localStorage
  localStorage.setItem('users', JSON.stringify(existingUsers));
  setTimeout(() => {
  window.location.assign('../index.html');
  }, 500);
  showToast('Registration Successful. Data saved.', 'success');
}

function showToast(message, toastColor) {
  const toastContainer = document.getElementById('toastContainer');
  toastContainer.innerHTML = `
    <div class="alert alert-${toastColor} alert-dismissible" role="alert">
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  const toast = new bootstrap.Toast(document.querySelector('.toast'));
  toast.show();
}

function googleLogin() {
  const toastContainer = document.getElementById('toastContainer');
  toastContainer.innerHTML = `
   <div class="alert alert-danger alert-dismissible" role="alert">
      <div>Featured is not available yet</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  const toast = new bootstrap.Toast(document.querySelector('.toast'));
  toast.show();
}
