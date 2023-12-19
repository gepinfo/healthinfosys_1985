
import * as mongoose from 'mongoose';
import { NdSex } from '../entitymodels/ticket';

const Schema = mongoose.Schema;

export const HeaderblkSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   SpecimenNo: { type: String },
   SpecimenNoLv: { type: String },
   PatientId: { type: String },
   ShortName: { type: String },
   CommentCode: { type: String },
   BloodGroup: { type: String },
   BloodGroupLv: { type: String },
   RhesusCode: { type: String },
   RhesusCodeLv: { type: String },
   CommentCodeLv: { type: String },
   Comments: { type: String },
   NdPriorityInd: { type: String },
   NdSex: { type: String, enum: NdSex },
   NdAgeYrs: { type: Number },
   NdAgeMths: { type: Number },
   NdAgeDays: { type: Number },
   Reprint: { type: String },
   NdSpecRegdDateTime: { type: String },
   Print: { type: String },
   PbReleaseBlood: { type: String },
   PbBbComm: { type: String },
   PbMigTransHist: { type: String }
})

const HeaderblkModel = mongoose.model('Headerblk', HeaderblkSchema, 'Headerblk');
export default HeaderblkModel;
