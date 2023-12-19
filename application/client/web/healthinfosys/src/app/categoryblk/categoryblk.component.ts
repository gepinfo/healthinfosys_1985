import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryblkService } from './categoryblk.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';


interface DataItem {
  categorycode: String;
  productcode: String;
  remarks: String;
  ndproductdesc: String;
  volume: String;
  volumeunit: String;
  categoryrequested: Number;
  ndcategoryreqddate: String;
  ndtransfuseexpectdatetime: String;
  ndautologunit: String;
  nddirectedunit: String;
  ndaltproduct: String;
  ndgetunitsfromothfacility: String;
  accessProfile: String;
  status: String;
}

@Component({
  selector: 'app-categoryblk',
  templateUrl: './categoryblk.component.html',
  styleUrls: ['./categoryblk.component.scss'],
})

export class CategoryblkComponent implements OnInit {
public searchtickets:any;
    public categoryblk:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        categorycode: '',
        productcode: '',
        remarks: '',
        ndproductdesc: '',
        volume: '',
        volumeunit: '',
        categoryrequested: '',
        ndcategoryreqddate: '',
        ndtransfuseexpectdatetime: '',
        ndautologunit: '',
        nddirectedunit: '',
        ndaltproduct: '',
        ndgetunitsfromothfacility: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private categoryblkService: CategoryblkService,
    ) { }

    ngOnInit() {
        this.GetAllValues();
        this.categoryblk.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }

   showModal(): void {
    this.isVisibleCreate = true;
   }

  handleOk(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }

  handleCancel(): void {
 
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }




     Create() {
      this.isVisibleCreate = false;
        this.categoryblkService.PostAllcategoryblkValues(this.categoryblk).subscribe((data:any) => {
            this.categoryblk.categorycode = '',
            this.categoryblk.productcode = '',
            this.categoryblk.remarks = '',
            this.categoryblk.ndproductdesc = '',
            this.categoryblk.volume = '',
            this.categoryblk.volumeunit = '',
            this.categoryblk.categoryrequested = '',
            this.categoryblk.ndcategoryreqddate = '',
            this.categoryblk.ndtransfuseexpectdatetime = '',
            this.categoryblk.ndautologunit = '',
            this.categoryblk.nddirectedunit = '',
            this.categoryblk.ndaltproduct = '',
            this.categoryblk.ndgetunitsfromothfacility = '',
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    filterStatus = [
      { text: 'Active', value: 'ACTIVE' },
      { text: 'In-Active', value: 'INACTIVE' }
    ];
  
    filterAccessProfile = [
      { text: 'Receptionist', value: 'Receptionist' },
      { text: 'Health Care Provide', value: 'Health Care Provide' }
    ]
  
    
  
    listOfData: DataItem[] = [];

    Update() {
        this.categoryblkService.Updatecategoryblk(this.categoryblk).subscribe((data:any) => {
            this.categoryblk.categorycode = '';
            this.categoryblk.productcode = '';
            this.categoryblk.remarks = '';
            this.categoryblk.ndproductdesc = '';
            this.categoryblk.volume = '';
            this.categoryblk.volumeunit = '';
            this.categoryblk.categoryrequested = '';
            this.categoryblk.ndcategoryreqddate = '';
            this.categoryblk.ndtransfuseexpectdatetime = '';
            this.categoryblk.ndautologunit = '';
            this.categoryblk.nddirectedunit = '';
            this.categoryblk.ndaltproduct = '';
            this.categoryblk.ndgetunitsfromothfacility = '';
            this.GetAllValues();
            this.isVisibleUpdate = false;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Delete(deleteid:any) {
        this.categoryblkService.DeletecategoryblkValues(deleteid).subscribe((data:any) => {
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    GetAllValues() {
        this.categoryblkService.GetAllcategoryblkValues().subscribe((data: any) => {
            this.listOfData = data;
            console.log(data);
        },
        (error: Error) => {
            console.log('Error', error);
        });
    }


    search(search:any){
    if(search.length >= 2){
        const targetValue: any[] = [];
        this.listOfData.forEach((value: any) => {
            let keys = Object.keys(value);
            for (let i = 0; i < keys.length; i++) {
                if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
                    targetValue.push(value);
                    break;
                }
            }
        });
        this.listOfData = targetValue;
        } else {
            this.GetAllValues();
        }
    }


    cancel(): void {
        this.nzMessageService.info('click cancel');
    }

    confirmDelete(data:any): void {
        this.nzMessageService.info('click confirm');
        this.Delete(data.id);
    }

    getUpdateById(data:any){
        this.isVisibleUpdate = true;
        this.categoryblk = data;
    }
}

  