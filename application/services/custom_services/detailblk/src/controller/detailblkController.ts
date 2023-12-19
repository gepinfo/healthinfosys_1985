import { Request, Response } from 'express';
import { detailblkService } from '../service/detailblkService';
import { CustomLogger } from '../config/Logger'
let detailblk = new detailblkService();

export class detailblkController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    detailblk.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailblkController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailblkController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    detailblk.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailblkController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailblkController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    detailblk.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailblkController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailblkController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    detailblk.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailblkController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailblkController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    detailblk.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailblkController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailblkController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    detailblk.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailblkController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailblkController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    detailblk.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailblkController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailblkController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    detailblk.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailblkController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailblkController.ts: GpGetNounCreatedBy');
    })}


}