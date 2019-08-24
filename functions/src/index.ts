import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

/** Instantiate Express Application */
const app = express();

/** Inject Middlewares to Application */
app.use(cors());

/** Status of Cloud Function Application */
app.get('/status', (_req, res) => {
  res.sendStatus(200);
})

export default {
  app: functions.https.onRequest(app),
};
