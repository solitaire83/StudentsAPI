const express = require('express');
const router = express.Router();

const load = require("./main/loadStudents");
const save = require("./main/saveStudent");
const remove = require("./main/rmvStudent");

const sortnume = require("./sorting/sortnume");
const sortnota = require("./sorting/sortnota");

router.use(load);
router.use(save);
router.use(remove);
router.use(sortnume);
router.use(sortnota);

router.get("/", (req, res) => {
    res.send(`
   <body style="background: #494D5F; margin: 0; padding: 0;">
   <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; margin:0; padding: 0;">
   <h1 style="margin: 0;">Bn te-am gasit, astea sunt toate rutele:</h1>
   <div style="font-size: 30px;">
   GET -> <a href="/api/loadStudents" style="color: green;">/api/loadStudents</a><br>
   POST -> <a href="/api/saveStudent" style="color: green;">/api/saveStudents</a><br>
   DELETE -> <a href="/api/rmvStudent" style="color: green;">/api/rmvStudents</a><br>
   <br>
   GET -> <a href="/api/sorting/sortnume" style="color: green;">/api/sorting/sortnume</a><br>
   GET -> <a href="/api/sorting/sortnota" style="color: green;">/api/sorting/sortnota</a>
   </div>
   </div>
   </body>
        `)
});

module.exports = router;