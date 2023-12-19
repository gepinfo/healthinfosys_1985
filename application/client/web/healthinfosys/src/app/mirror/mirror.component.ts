import { Component, OnInit, ViewChild } from '@angular/core';
import { MirrorService } from './mirror.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';


interface DataItem {
  viewsummary: String;
  pbxmatchtest: String;
  btnmulunit: String;
  pbxmtch: String;
  pbissue: String;
  pbrevertiss: String;
  pbreturn: String;
  pbunitattribute: String;
  pbunitantigens: String;
  nddoblegend: String;
  page1lov: String;
  page1date: String;
  ndurgent: String;
  ndroutine: String;
  ndautologouscolorcode: String;
  ndmultiallocation: String;
  pbpatantibodies: String;
  pbpatrequire: String;
  pushbutton328: String;
  pbtransfusehist: String;
  btnmotherspecdtls: String;
  btntransplantdtls: String;
  item404: String;
  ndstat: String;
  ndpatient: String;
  userpopmenu: String;
  item500: String;
  ndselallunits: String;
  barcodeunit: String;
  pbfindetails: String;
  ndbldprocessdisptemp: String;
  pbordercomment: String;
  pbaliquot: String;
  pbpool: String;
  ndhideline: String;
  pbmodifyreservedate: String;
  accessProfile: String;
  status: String;
}

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.scss'],
})

export class MirrorComponent implements OnInit {
public searchtickets:any;
    public mirror:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        viewsummary: '',
        pbxmatchtest: '',
        btnmulunit: '',
        pbxmtch: '',
        pbissue: '',
        pbrevertiss: '',
        pbreturn: '',
        pbunitattribute: '',
        pbunitantigens: '',
        nddoblegend: '',
        page1lov: '',
        page1date: '',
        ndurgent: '',
        ndroutine: '',
        ndautologouscolorcode: '',
        ndmultiallocation: '',
        pbpatantibodies: '',
        pbpatrequire: '',
        pushbutton328: '',
        pbtransfusehist: '',
        btnmotherspecdtls: '',
        btntransplantdtls: '',
        item404: '',
        ndstat: '',
        ndpatient: '',
        userpopmenu: '',
        item500: '',
        ndselallunits: '',
        barcodeunit: '',
        pbfindetails: '',
        ndbldprocessdisptemp: '',
        pbordercomment: '',
        pbaliquot: '',
        pbpool: '',
        ndhideline: '',
        pbmodifyreservedate: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private mirrorService: MirrorService,
    ) { }

    ngOnInit() {
        this.GetAllValues();
        this.mirror.created_by = sessionStorage.getItem('email') || ''; 
        


    
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
        this.mirrorService.PostAllmirrorValues(this.mirror).subscribe((data:any) => {
            this.mirror.viewsummary = '',
            this.mirror.pbxmatchtest = '',
            this.mirror.btnmulunit = '',
            this.mirror.pbxmtch = '',
            this.mirror.pbissue = '',
            this.mirror.pbrevertiss = '',
            this.mirror.pbreturn = '',
            this.mirror.pbunitattribute = '',
            this.mirror.pbunitantigens = '',
            this.mirror.nddoblegend = '',
            this.mirror.page1lov = '',
            this.mirror.page1date = '',
            this.mirror.ndurgent = '',
            this.mirror.ndroutine = '',
            this.mirror.ndautologouscolorcode = '',
            this.mirror.ndmultiallocation = '',
            this.mirror.pbpatantibodies = '',
            this.mirror.pbpatrequire = '',
            this.mirror.pushbutton328 = '',
            this.mirror.pbtransfusehist = '',
            this.mirror.btnmotherspecdtls = '',
            this.mirror.btntransplantdtls = '',
            this.mirror.item404 = '',
            this.mirror.ndstat = '',
            this.mirror.ndpatient = '',
            this.mirror.userpopmenu = '',
            this.mirror.item500 = '',
            this.mirror.ndselallunits = '',
            this.mirror.barcodeunit = '',
            this.mirror.pbfindetails = '',
            this.mirror.ndbldprocessdisptemp = '',
            this.mirror.pbordercomment = '',
            this.mirror.pbaliquot = '',
            this.mirror.pbpool = '',
            this.mirror.ndhideline = '',
            this.mirror.pbmodifyreservedate = '',
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
        this.mirrorService.Updatemirror(this.mirror).subscribe((data:any) => {
            this.mirror.viewsummary = '';
            this.mirror.pbxmatchtest = '';
            this.mirror.btnmulunit = '';
            this.mirror.pbxmtch = '';
            this.mirror.pbissue = '';
            this.mirror.pbrevertiss = '';
            this.mirror.pbreturn = '';
            this.mirror.pbunitattribute = '';
            this.mirror.pbunitantigens = '';
            this.mirror.nddoblegend = '';
            this.mirror.page1lov = '';
            this.mirror.page1date = '';
            this.mirror.ndurgent = '';
            this.mirror.ndroutine = '';
            this.mirror.ndautologouscolorcode = '';
            this.mirror.ndmultiallocation = '';
            this.mirror.pbpatantibodies = '';
            this.mirror.pbpatrequire = '';
            this.mirror.pushbutton328 = '';
            this.mirror.pbtransfusehist = '';
            this.mirror.btnmotherspecdtls = '';
            this.mirror.btntransplantdtls = '';
            this.mirror.item404 = '';
            this.mirror.ndstat = '';
            this.mirror.ndpatient = '';
            this.mirror.userpopmenu = '';
            this.mirror.item500 = '';
            this.mirror.ndselallunits = '';
            this.mirror.barcodeunit = '';
            this.mirror.pbfindetails = '';
            this.mirror.ndbldprocessdisptemp = '';
            this.mirror.pbordercomment = '';
            this.mirror.pbaliquot = '';
            this.mirror.pbpool = '';
            this.mirror.ndhideline = '';
            this.mirror.pbmodifyreservedate = '';
            this.GetAllValues();
            this.isVisibleUpdate = false;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Delete(deleteid:any) {
        this.mirrorService.DeletemirrorValues(deleteid).subscribe((data:any) => {
            this.GetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    GetAllValues() {
        this.mirrorService.GetAllmirrorValues().subscribe((data: any) => {
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
        this.mirror = data;
    }
}

  