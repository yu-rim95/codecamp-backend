// const express = require('express') //옛날방식 => comonjs 방식

import express from 'express' //요즘방식 => mmodule 방식
const app = express()

app.get('/qqq', function (req, res) {
  res.send('Hello WorldWorldWorld')
})


app.listen(3000)