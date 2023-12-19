
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const detailblkSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   unitno: { type: String },
   ndproductcode: { type: String },
   bloodgroup: { type: String },
   currentvolume: { type: String },
   volumeunits: { type: String },
   rhesuscode: { type: String },
   ndexpirydate: { type: String },
   unitstatus: { type: String },
   decodedunitstatus: { type: String },
   ndreserveddate1: { type: String },
   storageloccode: { type: String },
   ndsimunit: { type: String },
   ndselectunit: { type: String },
   ndautologunit: { type: String },
   nddirectedunit: { type: String }
})

const detailblkModel = mongoose.model('detailblk', detailblkSchema, 'detailblk');
export default detailblkModel;
