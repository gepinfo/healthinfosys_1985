import { Request, Response } from 'express';
import {mirrorDao} from '../dao/mirrorDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let mirror = new mirrorDao();

export class mirrorService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mirrorService.ts: GpDelete')
     let  mirrorId = req.params.id;
     mirror.GpDelete(mirrorId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mirrorService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mirrorService.ts: GpSearch')
     let  mirrorData = req.query;
     mirror.GpSearch(mirrorData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mirrorService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mirrorService.ts: GpSearchForUpdate')
     let  mirrorData = req.body;
     mirror.GpSearchForUpdate(mirrorData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mirrorService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mirrorService.ts: GpUpdate')
     let  mirrorData = req.body;
     mirror.GpUpdate(mirrorData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mirrorService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mirrorService.ts: GpGetEntityById')
     let  mirrorId = req.params.id;
     mirror.GpGetEntityById(mirrorId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mirrorService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mirrorService.ts: GpGetAllValues')
     
     mirror.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from mirrorService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mirrorService.ts: GpCreate')
     let  mirrorData = req.body;
     mirror.GpCreate(mirrorData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mirrorService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into mirrorService.ts: GpGetNounCreatedBy')
     let  mirrorData = { created_by: req.query.createdby };
     mirror.GpGetNounCreatedBy(mirrorData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from mirrorService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}