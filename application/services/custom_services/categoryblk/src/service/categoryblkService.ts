import { Request, Response } from 'express';
import {categoryblkDao} from '../dao/categoryblkDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let categoryblk = new categoryblkDao();

export class categoryblkService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into categoryblkService.ts: GpDelete')
     let  categoryblkId = req.params.id;
     categoryblk.GpDelete(categoryblkId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from categoryblkService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into categoryblkService.ts: GpSearch')
     let  categoryblkData = req.query;
     categoryblk.GpSearch(categoryblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from categoryblkService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into categoryblkService.ts: GpSearchForUpdate')
     let  categoryblkData = req.body;
     categoryblk.GpSearchForUpdate(categoryblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from categoryblkService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into categoryblkService.ts: GpUpdate')
     let  categoryblkData = req.body;
     categoryblk.GpUpdate(categoryblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from categoryblkService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into categoryblkService.ts: GpGetEntityById')
     let  categoryblkId = req.params.id;
     categoryblk.GpGetEntityById(categoryblkId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from categoryblkService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into categoryblkService.ts: GpGetAllValues')
     
     categoryblk.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from categoryblkService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into categoryblkService.ts: GpCreate')
     let  categoryblkData = req.body;
     categoryblk.GpCreate(categoryblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from categoryblkService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into categoryblkService.ts: GpGetNounCreatedBy')
     let  categoryblkData = { created_by: req.query.createdby };
     categoryblk.GpGetNounCreatedBy(categoryblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from categoryblkService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}