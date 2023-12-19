import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderblkService } from './headerblk.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

    export enum ndsex {
        MALE = 'male',
        FEMALE = 'female',
        UNKNOWN = 'unknown',
    }

interface DataItem {
  specimenno: String;
  specimennolv: String;
  patientid: String;
  shortname: String;
  commentcode: String;
  bloodgroup: String;
  bloodgrouplv: String;
  rhesuscode: String;
  rhesuscodelv: String;
  commentcodelv: String;
  comments: String;
  ndpriorityind: String;
  ndsex: ndsex;
  ndageyrs: Number;
  ndagemths: Number;
  ndagedays: Number;
  reprint: String;
  ndspecregddatetime: String;
  print: String;
  pbreleaseblood: String;
  pbbbcomm: String;
  pbmigtranshist: String;
  accessProfile: String;
  status: String;
}

@Component({
  selector: 'app-headerblk',
  templateUrl: './headerblk.component.html',
  styleUrls: ['./headerblk.component.scss'],
})

export class HeaderblkComponent implements OnInit {
public searchtickets:any;
    public headerblk:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        specimenno: '',
        specimennolv: '',
        patientid: '',
        shortname: '',
        commentcode: '',
        bloodgroup: '',
        bloodgrouplv: '',
        rhesuscode: '',
        rhesuscodelv: '',
        commentcodelv: '',
        comments: '',
        ndpriorityind: '',
        ndsex: '',
        ndageyrs: '',
        ndagemths: '',
        ndagedays: '',
        reprint: '',
        ndspecregddatetime: '',
        print: '',
        pbreleaseblood: '',
        pbbbcomm: '',
        pbmigtranshist: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private headerblkService: HeaderblkService,
    ) { }

    ngOnInit() {
        this.GetAllValues();
        this.headerblk.created_by = sessionStorage.getItem('email') || ''; 
        


    
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
        this.headerblkService.PostAllheaderblkValues(this.headerblk).subscribe((data:any) => {
            this.headerblk.specimenno = '',
            this.headerblk.specimennolv = '',
            this.headerblk.patientid = '',
            this.headerblk.shortname = '',
            this.headerblk.commentcode = '',
            this.headerblk.bloodgroup = '',
            this.headerblk.bloodgrouplv = '',
            this.headerblk.rhesuscode = '',
            this.headerblk.rhesuscodelv = '',
            this.headerblk.commentcodelv = '',
            this.headerblk.comments = '',
            this.headerblk.ndpriorityind = '',
            this.headerblk.ndsex = '',
            this.headerblk.ndageyrs = '',
            this.headerblk.ndagemths = '',
            this.headerblk.ndagedays = '',
            this.headerblk.reprint = '',
            this.headerblk.ndspecregddatetime = '',
            this.headerblk.print = '',
            this.headerblk.pbreleaseblood = '',
            this.headerblk.pbbbcomm = '',
            this.headerblk.pbmigtranshist = '',
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
        this.headerblkService.Updateheaderblk(this.headerblk).subscribe((data:any) => {
            this.headerblk.specimenno = '';
            this.headerblk.specimennolv = '';
            this.headerblk.patientid = '';
            this.headerblk.shortname = '';
            this.headerblk.commentcode = '';
            this.headerblk.bloodgroup = '';
            this.headerblk.bloodgrouplv = '';
            this.headerblk.rhesuscode = '';
            this.headerblk.rhesuscodelv = '';
            this.headerblk.commentcodelv = '';
            this.headerblk.comments = '';
            this.headerblk.ndpriorityind = '';
            this.headerblk.ndsex = '';
            this.headerblk.ndageyrs = '';
            this.headerblk.ndagemths = '';
            this.headerblk.ndagedays = '';
            this.headerblk.reprint = '';
            this.headerblk.ndspecregddatetime = '';
            this.headerblk.print = '';
            this.headerblk.pbreleaseblood = '';
            this.headerblk.pbbbcomm = '';
            this.headerblk.pbmigtranshist = '';
            this.GetAllValues();
            this.isVisibleUpdate = false;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Delete(deleteid:any) {
        this.headerblkService.DeleteheaderblkValues(deleteid).subscribe((data:any) => {
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    GetAllValues() {
        this.headerblkService.GetAllheaderblkValues().subscribe((data: any) => {
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
        this.headerblk = data;
    }
}

  