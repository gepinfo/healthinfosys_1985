import { Request, Response, NextFunction } from "express";
import { categoryblkController } from '../controller/categoryblkController';


export class Routes {
    private categoryblk: categoryblkController = new categoryblkController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/categoryblk/:id').delete(this.categoryblk.GpDelete);
app.route('/categoryblk/get/search').get(this.categoryblk.GpSearch);
app.route('/categoryblk/get/update').put(this.categoryblk.GpSearchForUpdate);
app.route('/categoryblk').put(this.categoryblk.GpUpdate);
app.route('/categoryblk/:id').get(this.categoryblk.GpGetEntityById);
app.route('/categoryblk').get(this.categoryblk.GpGetAllValues);
app.route('/categoryblk').post(this.categoryblk.GpCreate);
app.route('/categoryblk/userid/created_by').get(this.categoryblk.GpGetNounCreatedBy);
     }

}