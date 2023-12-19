import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailblkService } from './detailblk.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';


interface DataItem {
  unitno: String;
  ndproductcode: String;
  bloodgroup: String;
  currentvolume: String;
  volumeunits: String;
  rhesuscode: String;
  ndexpirydate: String;
  unitstatus: String;
  decodedunitstatus: String;
  ndreserveddate1: String;
  storageloccode: String;
  ndsimunit: String;
  ndselectunit: String;
  ndautologunit: String;
  nddirectedunit: String;
  accessProfile: String;
  status: String;
}

@Component({
  selector: 'app-detailblk',
  templateUrl: './detailblk.component.html',
  styleUrls: ['./detailblk.component.scss'],
})

export class DetailblkComponent implements OnInit {
public searchtickets:any;
    public detailblk:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        unitno: '',
        ndproductcode: '',
        bloodgroup: '',
        currentvolume: '',
        volumeunits: '',
        rhesuscode: '',
        ndexpirydate: '',
        unitstatus: '',
        decodedunitstatus: '',
        ndreserveddate1: '',
        storageloccode: '',
        ndsimunit: '',
        ndselectunit: '',
        ndautologunit: '',
        nddirectedunit: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private detailblkService: DetailblkService,
    ) { }

    ngOnInit() {
        this.GetAllValues();
        this.detailblk.created_by = sessionStorage.getItem('email') || ''; 
        


    
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
        this.detailblkService.PostAlldetailblkValues(this.detailblk).subscribe((data:any) => {
            this.detailblk.unitno = '',
            this.detailblk.ndproductcode = '',
            this.detailblk.bloodgroup = '',
            this.detailblk.currentvolume = '',
            this.detailblk.volumeunits = '',
            this.detailblk.rhesuscode = '',
            this.detailblk.ndexpirydate = '',
            this.detailblk.unitstatus = '',
            this.detailblk.decodedunitstatus = '',
            this.detailblk.ndreserveddate1 = '',
            this.detailblk.storageloccode = '',
            this.detailblk.ndsimunit = '',
            this.detailblk.ndselectunit = '',
            this.detailblk.ndautologunit = '',
            this.detailblk.nddirectedunit = '',
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
        this.detailblkService.Updatedetailblk(this.detailblk).subscribe((data:any) => {
            this.detailblk.unitno = '';
            this.detailblk.ndproductcode = '';
            this.detailblk.bloodgroup = '';
            this.detailblk.currentvolume = '';
            this.detailblk.volumeunits = '';
            this.detailblk.rhesuscode = '';
            this.detailblk.ndexpirydate = '';
            this.detailblk.unitstatus = '';
            this.detailblk.decodedunitstatus = '';
            this.detailblk.ndreserveddate1 = '';
            this.detailblk.storageloccode = '';
            this.detailblk.ndsimunit = '';
            this.detailblk.ndselectunit = '';
            this.detailblk.ndautologunit = '';
            this.detailblk.nddirectedunit = '';
            this.GetAllValues();
            this.isVisibleUpdate = false;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Delete(deleteid:any) {
        this.detailblkService.DeletedetailblkValues(deleteid).subscribe((data:any) => {
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    GetAllValues() {
        this.detailblkService.GetAlldetailblkValues().subscribe((data: any) => {
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
        this.detailblk = data;
    }
}

  