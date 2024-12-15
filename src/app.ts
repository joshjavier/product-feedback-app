import express from 'express';
import 'express-async-errors';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import dbConnect from './db-connect';
import indexRouter from './routes';
import usersRouter from './routes/users';
import feedbacksRouter from './routes/feedbacks';
import errorHandler from './middlewares/error-handler';

dbConnect()

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/feedbacks', feedbacksRouter);

app.use(errorHandler);

export default app;
