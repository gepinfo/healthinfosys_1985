import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorComponent } from './mirror.component';
import { MirrorService } from './mirror.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

describe('MirrorComponent', () => {
  let component: MirrorComponent;
  let fixture: ComponentFixture<MirrorComponent>;
  let service: MirrorService;
  let httpClient: HttpClientTestingModule;
  let nzMessageService: NzMessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [
         HttpClientTestingModule,
        NzFormModule,
        NzMenuModule,
        NzLayoutModule,
        NzInputModule,
        NzTableModule,
        NzDropDownModule,
        NzSwitchModule,
        FormsModule,
        NzIconModule,
        NzButtonModule,
        NzSelectModule,
        NzModalModule,
        NzFormModule,
        NzPopconfirmModule,
        NzMessageModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ MirrorComponent ],
      providers: [ MirrorService, NzMessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MirrorService);
    httpClient = TestBed.inject(HttpClient);
    nzMessageService = TestBed.inject(NzMessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //cancel nzmessage
  it('should call nzMessageService.info with the expected message', () => {
    spyOn(nzMessageService, 'info'); // Spy on the nzMessageService.info method
    
    component.cancel();

    expect(nzMessageService.info).toHaveBeenCalledWith('click cancel');
  });

  // confirm delete
  it('should call nzMessageService.info with the expected message and Delete with the correct id', () => {
    spyOn(nzMessageService, 'info'); // Spy on the nzMessageService.info method
    spyOn(component, 'Delete'); // Spy on the Delete method
    const data = { id: 1 };

    component.confirmDelete(data);

    expect(nzMessageService.info).toHaveBeenCalledWith('click confirm');
    expect(component.Delete).toHaveBeenCalledWith(data.id);
  });

   //show modal
  it('should set isVisibleCreate to true', () => {
    component.showModal();

    expect(component.isVisibleCreate).toBe(true);
  });
  //handleok
  it('should set handle ok isVisibleCreate and isVisibleUpdate to true', () => {
    spyOn(console, 'log'); // Spy  on the console.log method
    
    component.handleOk();

     
    expect(component.isVisibleCreate).toBe(false);
    expect(component.isVisibleUpdate).toBe(false);
  });
  //handle cancel
  it('should set handlecancel isVisibleCreate and isVisibleUpdate to false', () => {
    spyOn(console, 'log'); // Spy  on the console.log method
    
    component.handleCancel();

 
    expect(component.isVisibleCreate).toBe(false);
    expect(component.isVisibleUpdate).toBe(false);
  });






  // post create apps 
  it('should call PostAllmirrorValues and reset mirror properties', () => {
    // Create a spy for the Create method of the service
    spyOn(service, 'PostAllmirrorValues').and.returnValue(of({}));
  
    // Set values for mirror properties
    component.mirror.viewsummary = 'viewsummary Name';
    component.mirror.pbxmatchtest = 'pbxmatchtest Name';
    component.mirror.btnmulunit = 'btnmulunit Name';
    component.mirror.pbxmtch = 'pbxmtch Name';
    component.mirror.pbissue = 'pbissue Name';
    component.mirror.pbrevertiss = 'pbrevertiss Name';
    component.mirror.pbreturn = 'pbreturn Name';
    component.mirror.pbunitattribute = 'pbunitattribute Name';
    component.mirror.pbunitantigens = 'pbunitantigens Name';
    component.mirror.nddoblegend = 'nddoblegend Name';
    component.mirror.page1lov = 'page1lov Name';
    component.mirror.page1date = 'page1date Name';
    component.mirror.ndurgent = 'ndurgent Name';
    component.mirror.ndroutine = 'ndroutine Name';
    component.mirror.ndautologouscolorcode = 'ndautologouscolorcode Name';
    component.mirror.ndmultiallocation = 'ndmultiallocation Name';
    component.mirror.pbpatantibodies = 'pbpatantibodies Name';
    component.mirror.pbpatrequire = 'pbpatrequire Name';
    component.mirror.pushbutton328 = 'pushbutton328 Name';
    component.mirror.pbtransfusehist = 'pbtransfusehist Name';
    component.mirror.btnmotherspecdtls = 'btnmotherspecdtls Name';
    component.mirror.btntransplantdtls = 'btntransplantdtls Name';
    component.mirror.item404 = 'item404 Name';
    component.mirror.ndstat = 'ndstat Name';
    component.mirror.ndpatient = 'ndpatient Name';
    component.mirror.userpopmenu = 'userpopmenu Name';
    component.mirror.item500 = 'item500 Name';
    component.mirror.ndselallunits = 'ndselallunits Name';
    component.mirror.barcodeunit = 'barcodeunit Name';
    component.mirror.pbfindetails = 'pbfindetails Name';
    component.mirror.ndbldprocessdisptemp = 'ndbldprocessdisptemp Name';
    component.mirror.pbordercomment = 'pbordercomment Name';
    component.mirror.pbaliquot = 'pbaliquot Name';
    component.mirror.pbpool = 'pbpool Name';
    component.mirror.ndhideline = 'ndhideline Name';
    component.mirror.pbmodifyreservedate = 'pbmodifyreservedate Name';

    // Call the Create method
    component.Create();

    // Expect the PostAllmirrorValues method to have been called with the mirror object
    expect(service.PostAllmirrorValues).toHaveBeenCalledWith(component.mirror);

    // Expect the mirror properties to be reset
    expect(component.mirror.viewsummary).toBe('');
    expect(component.mirror.pbxmatchtest).toBe('');
    expect(component.mirror.btnmulunit).toBe('');
    expect(component.mirror.pbxmtch).toBe('');
    expect(component.mirror.pbissue).toBe('');
    expect(component.mirror.pbrevertiss).toBe('');
    expect(component.mirror.pbreturn).toBe('');
    expect(component.mirror.pbunitattribute).toBe('');
    expect(component.mirror.pbunitantigens).toBe('');
    expect(component.mirror.nddoblegend).toBe('');
    expect(component.mirror.page1lov).toBe('');
    expect(component.mirror.page1date).toBe('');
    expect(component.mirror.ndurgent).toBe('');
    expect(component.mirror.ndroutine).toBe('');
    expect(component.mirror.ndautologouscolorcode).toBe('');
    expect(component.mirror.ndmultiallocation).toBe('');
    expect(component.mirror.pbpatantibodies).toBe('');
    expect(component.mirror.pbpatrequire).toBe('');
    expect(component.mirror.pushbutton328).toBe('');
    expect(component.mirror.pbtransfusehist).toBe('');
    expect(component.mirror.btnmotherspecdtls).toBe('');
    expect(component.mirror.btntransplantdtls).toBe('');
    expect(component.mirror.item404).toBe('');
    expect(component.mirror.ndstat).toBe('');
    expect(component.mirror.ndpatient).toBe('');
    expect(component.mirror.userpopmenu).toBe('');
    expect(component.mirror.item500).toBe('');
    expect(component.mirror.ndselallunits).toBe('');
    expect(component.mirror.barcodeunit).toBe('');
    expect(component.mirror.pbfindetails).toBe('');
    expect(component.mirror.ndbldprocessdisptemp).toBe('');
    expect(component.mirror.pbordercomment).toBe('');
    expect(component.mirror.pbaliquot).toBe('');
    expect(component.mirror.pbpool).toBe('');
    expect(component.mirror.ndhideline).toBe('');
    expect(component.mirror.pbmodifyreservedate).toBe('');

  });
  it('should log error on update PostAllmirrorValues failure', () => {
    const error = new Error('PostAllmirrorValues failed');
    spyOn(service, 'PostAllmirrorValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Create();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });



  // GetAllValues all test case 
  it('should set the rowData property on successful response', () => {
    const mockData:any = [{ 
      _id: 1, 
      viewsummary: 'viewsummary 1',
      pbxmatchtest: 'pbxmatchtest 1',
      btnmulunit: 'btnmulunit 1',
      pbxmtch: 'pbxmtch 1',
      pbissue: 'pbissue 1',
      pbrevertiss: 'pbrevertiss 1',
      pbreturn: 'pbreturn 1',
      pbunitattribute: 'pbunitattribute 1',
      pbunitantigens: 'pbunitantigens 1',
      nddoblegend: 'nddoblegend 1',
      page1lov: 'page1lov 1',
      page1date: 'page1date 1',
      ndurgent: 'ndurgent 1',
      ndroutine: 'ndroutine 1',
      ndautologouscolorcode: 'ndautologouscolorcode 1',
      ndmultiallocation: 'ndmultiallocation 1',
      pbpatantibodies: 'pbpatantibodies 1',
      pbpatrequire: 'pbpatrequire 1',
      pushbutton328: 'pushbutton328 1',
      pbtransfusehist: 'pbtransfusehist 1',
      btnmotherspecdtls: 'btnmotherspecdtls 1',
      btntransplantdtls: 'btntransplantdtls 1',
      item404: 'item404 1',
      ndstat: 'ndstat 1',
      ndpatient: 'ndpatient 1',
      userpopmenu: 'userpopmenu 1',
      item500: 'item500 1',
      ndselallunits: 'ndselallunits 1',
      barcodeunit: 'barcodeunit 1',
      pbfindetails: 'pbfindetails 1',
      ndbldprocessdisptemp: 'ndbldprocessdisptemp 1',
      pbordercomment: 'pbordercomment 1',
      pbaliquot: 'pbaliquot 1',
      pbpool: 'pbpool 1',
      ndhideline: 'ndhideline 1',
      pbmodifyreservedate: 'pbmodifyreservedate 1',
    }];
    spyOn(service, 'GetAllmirrorValues').and.returnValue(of(mockData));

    component.GetAllValues();

    expect(service.GetAllmirrorValues).toHaveBeenCalled();
    expect(component.listOfData).toEqual(mockData);
  });
  it('should log error on update GetAllValues failure', () => {
    const error = new Error('GetAllValues failed');
    spyOn(service, 'GetAllmirrorValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });



  //update
  it('should clear UpdatemirrorComponent mirror properties on successful update', () => {
    spyOn(service, 'Updatemirror').and.returnValue(of({}));

    component.Update();

    expect(component.mirror.viewsummary).toBe('');
    expect(component.mirror.pbxmatchtest).toBe('');
    expect(component.mirror.btnmulunit).toBe('');
    expect(component.mirror.pbxmtch).toBe('');
    expect(component.mirror.pbissue).toBe('');
    expect(component.mirror.pbrevertiss).toBe('');
    expect(component.mirror.pbreturn).toBe('');
    expect(component.mirror.pbunitattribute).toBe('');
    expect(component.mirror.pbunitantigens).toBe('');
    expect(component.mirror.nddoblegend).toBe('');
    expect(component.mirror.page1lov).toBe('');
    expect(component.mirror.page1date).toBe('');
    expect(component.mirror.ndurgent).toBe('');
    expect(component.mirror.ndroutine).toBe('');
    expect(component.mirror.ndautologouscolorcode).toBe('');
    expect(component.mirror.ndmultiallocation).toBe('');
    expect(component.mirror.pbpatantibodies).toBe('');
    expect(component.mirror.pbpatrequire).toBe('');
    expect(component.mirror.pushbutton328).toBe('');
    expect(component.mirror.pbtransfusehist).toBe('');
    expect(component.mirror.btnmotherspecdtls).toBe('');
    expect(component.mirror.btntransplantdtls).toBe('');
    expect(component.mirror.item404).toBe('');
    expect(component.mirror.ndstat).toBe('');
    expect(component.mirror.ndpatient).toBe('');
    expect(component.mirror.userpopmenu).toBe('');
    expect(component.mirror.item500).toBe('');
    expect(component.mirror.ndselallunits).toBe('');
    expect(component.mirror.barcodeunit).toBe('');
    expect(component.mirror.pbfindetails).toBe('');
    expect(component.mirror.ndbldprocessdisptemp).toBe('');
    expect(component.mirror.pbordercomment).toBe('');
    expect(component.mirror.pbaliquot).toBe('');
    expect(component.mirror.pbpool).toBe('');
    expect(component.mirror.ndhideline).toBe('');
    expect(component.mirror.pbmodifyreservedate).toBe('');
  });

  it('should log error on update failure', () => {
    const error = new Error('Update failed');
    spyOn(service, 'Updatemirror').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Update();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });

  // delete the entity
  it('should call DeletemirrorValues and call GetAllValues on success', (() => {
    const deleteId = 123;
    const mockData:any = { 
      _id: 1, 
      name: 'test 1',
    };
    const deletemirrorValuesSpy = spyOn(service, 'DeletemirrorValues').and.returnValue(of(mockData));
    const gpGetAllValuesSpy = spyOn(component, 'GetAllValues');
    
    component.Delete(deleteId);
  

    expect(deletemirrorValuesSpy).toHaveBeenCalledWith(deleteId);
    expect(gpGetAllValuesSpy).toHaveBeenCalled();
  }));

  it('should log error on failure', (() => {
    const deleteId = 123;
    const error = new Error('Some error');
    spyOn(console, 'log');
    spyOn(service, 'DeletemirrorValues').and.returnValue(throwError(error));

    component.Delete(deleteId);
 
    expect(console.log).toHaveBeenCalledWith('Error', error);
  }));

  




  // fixed search method
  it('should filter listOfData when search length is greater than or equal to 2', () => {

    const targetValue:any[] =
    component.listOfData = [{ 
    }];

    component.search('Jo');

    expect(component.listOfData).toEqual([{ 
    }]);

  });

  it('should call GetAllValues when search length is less than 2', () => {
    spyOn(component, 'GetAllValues');

    component.search('J');

    expect(component.GetAllValues).toHaveBeenCalled();
  });
  



});