
export interface headerblk 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
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
   ndsex: { type: Ndsex },
   ndageyrs: { type: Number },
   ndagemths: { type: Number },
   ndagedays: { type: Number },
   reprint: { type: String },
   ndspecregddatetime: { type: String },
   print: { type: String },
   pbreleaseblood: { type: String },
   pbbbcomm: { type: String },
   pbmigtranshist: { type: String }
}


export enum Ndsex {
   MALE = 'male',
   FEMALE = 'female',
   UNKNOWN = 'unknown'
}



