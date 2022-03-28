// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ADW, Green } = initSchema(schema);

export {
  ADW,
  Green
};