import { Request, Response } from 'express';
import { headerblkService } from '../service/headerblkService';
import { CustomLogger } from '../config/Logger'
let headerblk = new headerblkService();

export class headerblkController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    headerblk.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into headerblkController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from headerblkController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    headerblk.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into headerblkController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from headerblkController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    headerblk.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into headerblkController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from headerblkController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    headerblk.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into headerblkController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from headerblkController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    headerblk.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into headerblkController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from headerblkController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    headerblk.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into headerblkController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from headerblkController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    headerblk.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into headerblkController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from headerblkController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    headerblk.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into headerblkController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from headerblkController.ts: GpGetNounCreatedBy');
    })}


}