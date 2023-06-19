var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "Outlook",
  auth: {
    user: "catalouni_94@live.fr",
    pass: "catalouni94",
  },
});

module.exports.sendConfirmationMail = (email, password) => {
  transporter
    .sendMail({
      from: "catalouni_94@live.fr",
      to: email,
      subject: "You forgot your password so we sent it to you",
      html: `<h1>Here's your password</h1>
<h3>Try to not forget it again!</h3>
<p>Password:${password}</p>
</div>`,
    })
    .catch((err) => console.log(err));
};
