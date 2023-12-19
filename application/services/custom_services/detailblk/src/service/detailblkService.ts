import { Request, Response } from 'express';
import {detailblkDao} from '../dao/detailblkDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let detailblk = new detailblkDao();

export class detailblkService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailblkService.ts: GpDelete')
     let  detailblkId = req.params.id;
     detailblk.GpDelete(detailblkId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailblkService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailblkService.ts: GpSearch')
     let  detailblkData = req.query;
     detailblk.GpSearch(detailblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailblkService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailblkService.ts: GpSearchForUpdate')
     let  detailblkData = req.body;
     detailblk.GpSearchForUpdate(detailblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailblkService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailblkService.ts: GpUpdate')
     let  detailblkData = req.body;
     detailblk.GpUpdate(detailblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailblkService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailblkService.ts: GpGetEntityById')
     let  detailblkId = req.params.id;
     detailblk.GpGetEntityById(detailblkId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailblkService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailblkService.ts: GpGetAllValues')
     
     detailblk.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailblkService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailblkService.ts: GpCreate')
     let  detailblkData = req.body;
     detailblk.GpCreate(detailblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailblkService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailblkService.ts: GpGetNounCreatedBy')
     let  detailblkData = { created_by: req.query.createdby };
     detailblk.GpGetNounCreatedBy(detailblkData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailblkService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}