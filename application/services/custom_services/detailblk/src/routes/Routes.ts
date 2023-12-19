import { Request, Response, NextFunction } from "express";
import { detailblkController } from '../controller/detailblkController';


export class Routes {
    private detailblk: detailblkController = new detailblkController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/detailblk/:id').delete(this.detailblk.GpDelete);
app.route('/detailblk/get/search').get(this.detailblk.GpSearch);
app.route('/detailblk/get/update').put(this.detailblk.GpSearchForUpdate);
app.route('/detailblk').put(this.detailblk.GpUpdate);
app.route('/detailblk/:id').get(this.detailblk.GpGetEntityById);
app.route('/detailblk').get(this.detailblk.GpGetAllValues);
app.route('/detailblk').post(this.detailblk.GpCreate);
app.route('/detailblk/userid/created_by').get(this.detailblk.GpGetNounCreatedBy);
     }

}