require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index.router');
const registerRouter = require('./routes/register.router');
const loginRouter = require('./routes/login.router');
const logoutRouter = require('./routes/logout.router');
const isAuthRouter = require('./routes/isAuth.router');

const app = express();

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
  },
  store: new FileStore(),
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/isauth', isAuthRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
