
import * as mongoose from 'mongoose';
import { Ndsex } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const headerblkSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   specimenno: { type: String },
   specimennolv: { type: String },
   patientid: { type: String },
   shortname: { type: String },
   commentcode: { type: String },
   bloodgroup: { type: String },
   bloodgrouplv: { type: String },
   rhesuscode: { type: String },
   rhesuscodelv: { type: String },
   commentcodelv: { type: String },
   comments: { type: String },
   ndpriorityind: { type: String },
   ndsex: { type: String, enum: Ndsex },
   ndageyrs: { type: Number },
   ndagemths: { type: Number },
   ndagedays: { type: Number },
   reprint: { type: String },
   ndspecregddatetime: { type: String },
   print: { type: String },
   pbreleaseblood: { type: String },
   pbbbcomm: { type: String },
   pbmigtranshist: { type: String }
})

const headerblkModel = mongoose.model('headerblk', headerblkSchema, 'headerblk');
export default headerblkModel;
