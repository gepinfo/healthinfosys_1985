
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const mirrorSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   viewsummary: { type: String },
   pbxmatchtest: { type: String },
   btnmulunit: { type: String },
   pbxmtch: { type: String },
   pbissue: { type: String },
   pbrevertiss: { type: String },
   pbreturn: { type: String },
   pbunitattribute: { type: String },
   pbunitantigens: { type: String },
   nddoblegend: { type: String },
   page1lov: { type: String },
   page1date: { type: String },
   ndurgent: { type: String },
   ndroutine: { type: String },
   ndautologouscolorcode: { type: String },
   ndmultiallocation: { type: String },
   pbpatantibodies: { type: String },
   pbpatrequire: { type: String },
   pushbutton328: { type: String },
   pbtransfusehist: { type: String },
   btnmotherspecdtls: { type: String },
   btntransplantdtls: { type: String },
   item404: { type: String },
   ndstat: { type: String },
   ndpatient: { type: String },
   userpopmenu: { type: String },
   item500: { type: String },
   ndselallunits: { type: String },
   barcodeunit: { type: String },
   pbfindetails: { type: String },
   ndbldprocessdisptemp: { type: String },
   pbordercomment: { type: String },
   pbaliquot: { type: String },
   pbpool: { type: String },
   ndhideline: { type: String },
   pbmodifyreservedate: { type: String }
})

const mirrorModel = mongoose.model('mirror', mirrorSchema, 'mirror');
export default mirrorModel;
