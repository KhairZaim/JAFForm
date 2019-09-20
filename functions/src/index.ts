import * as functions from 'firebase-functions';

import { Pdf as testPdf3Middleware } from './pdf';

export const Pdf3 = functions
  .runWith({ memory: '512MB' }) /* to launch headless chrome and get pdf */
  .https.onRequest(testPdf3Middleware);
