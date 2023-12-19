import { Request, Response } from 'express';
import {headerblkDao} from '../dao/headerblkDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let headerblk = new headerblkDao();

export class headerblkService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into headerblkService.ts: GpDelete')
     let  headerblkId = req.params.id;
     headerblk.GpDelete(headerblkId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from headerblkService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into headerblkService.ts: GpSearch')
     let  headerblkData = req.query;
     headerblk.GpSearch(headerblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from headerblkService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into headerblkService.ts: GpSearchForUpdate')
     let  headerblkData = req.body;
     headerblk.GpSearchForUpdate(headerblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from headerblkService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into headerblkService.ts: GpUpdate')
     let  headerblkData = req.body;
     headerblk.GpUpdate(headerblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from headerblkService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into headerblkService.ts: GpGetEntityById')
     let  headerblkId = req.params.id;
     headerblk.GpGetEntityById(headerblkId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from headerblkService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into headerblkService.ts: GpGetAllValues')
     
     headerblk.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from headerblkService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into headerblkService.ts: GpCreate')
     let  headerblkData = req.body;
     headerblk.GpCreate(headerblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from headerblkService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into headerblkService.ts: GpGetNounCreatedBy')
     let  headerblkData = { created_by: req.query.createdby };
     headerblk.GpGetNounCreatedBy(headerblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from headerblkService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}