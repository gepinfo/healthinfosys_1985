import { Request, Response, NextFunction } from "express";
import { mirrorController } from '../controller/mirrorController';


export class Routes {
    private mirror: mirrorController = new mirrorController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/mirror/:id').delete(this.mirror.GpDelete);
app.route('/mirror/get/search').get(this.mirror.GpSearch);
app.route('/mirror/get/update').put(this.mirror.GpSearchForUpdate);
app.route('/mirror').put(this.mirror.GpUpdate);
app.route('/mirror/:id').get(this.mirror.GpGetEntityById);
app.route('/mirror').get(this.mirror.GpGetAllValues);
app.route('/mirror').post(this.mirror.GpCreate);
app.route('/mirror/userid/created_by').get(this.mirror.GpGetNounCreatedBy);
     }

}