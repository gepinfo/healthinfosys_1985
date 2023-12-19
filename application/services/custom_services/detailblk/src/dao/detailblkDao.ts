import * as mongoose from 'mongoose';
import detailblkModel from '../models/daomodels/detailblk';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class detailblkDao {
    private detailblk = detailblkModel;
    constructor() { }
    
    public async GpDelete(detailblkId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailblkDao.ts: GpDelete');

    

    
    
    
    this.detailblk.findByIdAndRemove(detailblkId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from detailblkDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(detailblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailblkDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(detailblkData).forEach(
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
    this.detailblk.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from detailblkDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(detailblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailblkDao.ts: GpSearchForUpdate');

    

    
    
    
    this.detailblk.findOneAndUpdate({ _id: detailblkData._id }, detailblkData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from detailblkDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(detailblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailblkDao.ts: GpUpdate');

    

    
    
    
    this.detailblk.findOneAndUpdate({ _id: detailblkData._id }, detailblkData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from detailblkDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(detailblkId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailblkDao.ts: GpGetEntityById');

    

    
    
    
    this.detailblk.findById(detailblkId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from detailblkDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailblkDao.ts: GpGetAllValues');

    

    
    
    
    this.detailblk.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from detailblkDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(detailblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailblkDao.ts: GpCreate');

    let temp = new detailblkModel(detailblkData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from detailblkDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(detailblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailblkDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.detailblk.aggregate(([
                        { $match: { $and: [{ created_by: detailblkData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from detailblkDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}