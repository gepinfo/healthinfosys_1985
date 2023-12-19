import { Request, Response } from 'express';
import { mirrorService } from '../service/mirrorService';
import { CustomLogger } from '../config/Logger'
let mirror = new mirrorService();

export class mirrorController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    mirror.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mirrorController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mirrorController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    mirror.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mirrorController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mirrorController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    mirror.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mirrorController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mirrorController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    mirror.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mirrorController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mirrorController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    mirror.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mirrorController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mirrorController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    mirror.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mirrorController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mirrorController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    mirror.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mirrorController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mirrorController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    mirror.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into mirrorController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from mirrorController.ts: GpGetNounCreatedBy');
    })}


}