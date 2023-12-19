
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const categoryblkSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   categorycode: { type: String },
   productcode: { type: String },
   remarks: { type: String },
   ndproductdesc: { type: String },
   volume: { type: String },
   volumeunit: { type: String },
   categoryrequested: { type: Number },
   ndcategoryreqddate: { type: String },
   ndtransfuseexpectdatetime: { type: String },
   ndautologunit: { type: String },
   nddirectedunit: { type: String },
   ndaltproduct: { type: String },
   ndgetunitsfromothfacility: { type: String }
})

const categoryblkModel = mongoose.model('categoryblk', categoryblkSchema, 'categoryblk');
export default categoryblkModel;
