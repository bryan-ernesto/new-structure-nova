const express = require('express');

const ActiveDirectory = require('activedirectory');

const router = express.Router();

router.post('/Get_validate_status_user', (req, res) => {
  const username = `${req.body.username}@novales.com.gt`;
  const { password } = req.body;

  const config = {
    url: 'ldap://SRVDC01.novales.com.gt:389',
    baseDN: 'DC=novales,DC=com,DC=gt',
    username,
    password,
  };

  try {
    const ad = new ActiveDirectory(config);

    ad.authenticate(username, password, (err, auth) => {
      if (err) {
        res.status(401).json({ message: 'Authentication failed' });
      } else if (auth) {
        res.json({ authenticated: true });
      } else {
        res.status(401).json({ message: 'Authentication failed' });
      }
    });
  } catch (err) {
    res.status(500).send('Ha ocurrido un error al momento de procesar la consulta');
  }
});

module.exports = {
  router,
};
