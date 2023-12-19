import * as mongoose from 'mongoose';
import headerblkModel from '../models/daomodels/headerblk';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class headerblkDao {
    private headerblk = headerblkModel;
    constructor() { }
    
    public async GpDelete(headerblkId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into headerblkDao.ts: GpDelete');

    

    
    
    
    this.headerblk.findByIdAndRemove(headerblkId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from headerblkDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(headerblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into headerblkDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(headerblkData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.headerblk.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from headerblkDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(headerblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into headerblkDao.ts: GpSearchForUpdate');

    

    
    
    
    this.headerblk.findOneAndUpdate({ _id: headerblkData._id }, headerblkData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from headerblkDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(headerblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into headerblkDao.ts: GpUpdate');

    

    
    
    
    this.headerblk.findOneAndUpdate({ _id: headerblkData._id }, headerblkData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from headerblkDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(headerblkId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into headerblkDao.ts: GpGetEntityById');

    

    
    
    
    this.headerblk.findById(headerblkId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from headerblkDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into headerblkDao.ts: GpGetAllValues');

    

    
    
    
    this.headerblk.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from headerblkDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(headerblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into headerblkDao.ts: GpCreate');

    let temp = new headerblkModel(headerblkData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from headerblkDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(headerblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into headerblkDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.headerblk.aggregate(([
                        { $match: { $and: [{ created_by: headerblkData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from headerblkDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}