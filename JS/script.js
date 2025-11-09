document.addEventListener('DOMContentLoaded', function () {
      const form = document.querySelector('.needs-validation');
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
      const feedback = document.getElementById('passwordFeedback');
      const successAlert = document.getElementById('successAlert');

      // Real-time password match check
      confirmPassword.addEventListener('input', function () {
        if (confirmPassword.value === "") {
          feedback.textContent = "";
          confirmPassword.classList.remove('is-valid', 'is-invalid');
          return;
        }

        if (password.value === confirmPassword.value) {
          feedback.textContent = "✅ Passwords match";
          feedback.classList.add('valid');
          feedback.classList.remove('invalid');
          confirmPassword.classList.add('is-valid');
          confirmPassword.classList.remove('is-invalid');
        } else {
          feedback.textContent = "❌ Passwords do not match";
          feedback.classList.add('invalid');
          feedback.classList.remove('valid');
          confirmPassword.classList.add('is-invalid');
          confirmPassword.classList.remove('is-valid');
        }
      });

      // Form submission validation
      form.addEventListener('submit', function (event) {
        if (password.value !== confirmPassword.value) {
          confirmPassword.setCustomValidity('Passwords do not match');
        } else {
          confirmPassword.setCustomValidity('');
        }

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
          successAlert.style.display = 'none';
          return;
        }

        event.preventDefault(); // Prevent actual form submission
        form.classList.remove('was-validated');
        successAlert.style.display = 'block';
        form.reset();
        feedback.textContent = "";
        confirmPassword.classList.remove('is-valid', 'is-invalid');
      }, false);
    });