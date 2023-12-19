import * as mongoose from 'mongoose';
import mirrorModel from '../models/daomodels/mirror';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class mirrorDao {
    private mirror = mirrorModel;
    constructor() { }
    
    public async GpDelete(mirrorId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mirrorDao.ts: GpDelete');

    

    
    
    
    this.mirror.findByIdAndRemove(mirrorId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from mirrorDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(mirrorData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mirrorDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(mirrorData).forEach(
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
    this.mirror.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from mirrorDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(mirrorData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mirrorDao.ts: GpSearchForUpdate');

    

    
    
    
    this.mirror.findOneAndUpdate({ _id: mirrorData._id }, mirrorData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from mirrorDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(mirrorData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mirrorDao.ts: GpUpdate');

    

    
    
    
    this.mirror.findOneAndUpdate({ _id: mirrorData._id }, mirrorData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from mirrorDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(mirrorId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mirrorDao.ts: GpGetEntityById');

    

    
    
    
    this.mirror.findById(mirrorId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from mirrorDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into mirrorDao.ts: GpGetAllValues');

    

    
    
    
    this.mirror.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from mirrorDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(mirrorData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mirrorDao.ts: GpCreate');

    let temp = new mirrorModel(mirrorData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from mirrorDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(mirrorData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into mirrorDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.mirror.aggregate(([
                        { $match: { $and: [{ created_by: mirrorData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from mirrorDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}