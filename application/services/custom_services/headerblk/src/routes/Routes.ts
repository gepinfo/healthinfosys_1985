import { Request, Response, NextFunction } from "express";
import { headerblkController } from '../controller/headerblkController';


export class Routes {
    private headerblk: headerblkController = new headerblkController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/headerblk/:id').delete(this.headerblk.GpDelete);
app.route('/headerblk/get/search').get(this.headerblk.GpSearch);
app.route('/headerblk/get/update').put(this.headerblk.GpSearchForUpdate);
app.route('/headerblk').put(this.headerblk.GpUpdate);
app.route('/headerblk/:id').get(this.headerblk.GpGetEntityById);
app.route('/headerblk').get(this.headerblk.GpGetAllValues);
app.route('/headerblk').post(this.headerblk.GpCreate);
app.route('/headerblk/userid/created_by').get(this.headerblk.GpGetNounCreatedBy);
     }

}