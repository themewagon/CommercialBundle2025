/* -------------------------------------------------------------------------- */
/*                               Form-Processor                               */
/* -------------------------------------------------------------------------- */

const formInit = function formInit() {
  const zforms = document.querySelectorAll('[data-form]');

  if (zforms.length) {
    zforms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const feedbackEl = form.querySelector('.feedback');
        const formData = {};
        Array.from(form.elements).forEach((el) => {
          if (el.type !== 'submit') {
            formData[el.name] = el.value;
          }
        });
        window.Email.send({
          Host: 'smtp.mailtrap.io',
          Username: 'Your User Name ',
          Password: 'Your Password',
          To: formData.email,
          From: 'you@isp.com',
          Subject: 'This is the subject',
          Body: '\n<p>'.concat(formData.name, '</p>\n<p>').concat(formData.message, '</p>\n')
        })
          // eslint-disable-next-line no-unused-vars
          .then((_message) => {
            feedbackEl.innerHTML = '<div class=\'alert alert-success alert-dismissible\' role=\'alert\'>\n<button type=\'button\' class=\'btn-close fs--1\' data-bs-dismiss=\'alert\' aria-label=\'Close\'></button>\nYour message has been sent successfully.\n</div>';
          })
          // eslint-disable-next-line no-unused-vars
          .catch((_error) => {
            feedbackEl.innerHTML = '<div class=\'alert alert-danger alert-dismissible\' role=\'alert\'>\n <button type=\'button\' class=\'btn-close fs--1\' data-bs-dismiss=\'alert\' aria-label=\'Close\'></button>\nYour message not sent.\n</div>';
          });
      });
    });
  }
};

export default formInit;
