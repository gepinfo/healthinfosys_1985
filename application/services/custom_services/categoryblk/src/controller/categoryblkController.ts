import { Request, Response } from 'express';
import { categoryblkService } from '../service/categoryblkService';
import { CustomLogger } from '../config/Logger'
let categoryblk = new categoryblkService();

export class categoryblkController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    categoryblk.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into categoryblkController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from categoryblkController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    categoryblk.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into categoryblkController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from categoryblkController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    categoryblk.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into categoryblkController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from categoryblkController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    categoryblk.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into categoryblkController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from categoryblkController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    categoryblk.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into categoryblkController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from categoryblkController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    categoryblk.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into categoryblkController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from categoryblkController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    categoryblk.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into categoryblkController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from categoryblkController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    categoryblk.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into categoryblkController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from categoryblkController.ts: GpGetNounCreatedBy');
    })}


}