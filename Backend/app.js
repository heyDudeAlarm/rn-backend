const express = require('express');
const morgan  = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();

const app = express();

app.set('port', process.env.port || 8080);
