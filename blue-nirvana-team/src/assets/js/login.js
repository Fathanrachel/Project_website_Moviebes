 function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      showToast('Login failed. Please fill all required fields.', 'danger');
      return;
    }

    // get data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(function(u) {
      return u.email === email && u.password === password;
    });

    if (user) {
      setTimeout(() => {
        window.location.assign('/src/views/homepage.html');
      }, 500);
      showToast('Login successfull. Welcome, ' + user.username + '!', 'success');
    } else {
      showToast('Login Failed. Email or Password is incorrect.', 'danger');
    }
  }

  function showToast(message, type) {
    const toastContainer = document.getElementById('toastContainer');
    toastContainer.innerHTML = `
    <div class="alert alert-${type} alert-dismissible" role="alert">
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    ;

    const toast = new bootstrap.Toast(document.querySelector('.toast'));
    toast.show();
  }
