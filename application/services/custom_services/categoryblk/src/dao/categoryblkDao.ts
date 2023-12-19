import * as mongoose from 'mongoose';
import categoryblkModel from '../models/daomodels/categoryblk';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class categoryblkDao {
    private categoryblk = categoryblkModel;
    constructor() { }
    
    public async GpDelete(categoryblkId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into categoryblkDao.ts: GpDelete');

    

    
    
    
    this.categoryblk.findByIdAndRemove(categoryblkId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from categoryblkDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(categoryblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into categoryblkDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(categoryblkData).forEach(
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
    this.categoryblk.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from categoryblkDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(categoryblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into categoryblkDao.ts: GpSearchForUpdate');

    

    
    
    
    this.categoryblk.findOneAndUpdate({ _id: categoryblkData._id }, categoryblkData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from categoryblkDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(categoryblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into categoryblkDao.ts: GpUpdate');

    

    
    
    
    this.categoryblk.findOneAndUpdate({ _id: categoryblkData._id }, categoryblkData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from categoryblkDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(categoryblkId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into categoryblkDao.ts: GpGetEntityById');

    

    
    
    
    this.categoryblk.findById(categoryblkId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from categoryblkDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into categoryblkDao.ts: GpGetAllValues');

    

    
    
    
    this.categoryblk.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from categoryblkDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(categoryblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into categoryblkDao.ts: GpCreate');

    let temp = new categoryblkModel(categoryblkData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from categoryblkDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(categoryblkData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into categoryblkDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.categoryblk.aggregate(([
                        { $match: { $and: [{ created_by: categoryblkData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from categoryblkDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}