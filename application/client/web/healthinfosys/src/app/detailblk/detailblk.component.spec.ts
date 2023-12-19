import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailblkComponent } from './detailblk.component';
import { DetailblkService } from './detailblk.service';
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

describe('DetailblkComponent', () => {
  let component: DetailblkComponent;
  let fixture: ComponentFixture<DetailblkComponent>;
  let service: DetailblkService;
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
      declarations: [ DetailblkComponent ],
      providers: [ DetailblkService, NzMessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailblkComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DetailblkService);
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
  it('should call PostAlldetailblkValues and reset detailblk properties', () => {
    // Create a spy for the Create method of the service
    spyOn(service, 'PostAlldetailblkValues').and.returnValue(of({}));
  
    // Set values for detailblk properties
    component.detailblk.unitno = 'unitno Name';
    component.detailblk.ndproductcode = 'ndproductcode Name';
    component.detailblk.bloodgroup = 'bloodgroup Name';
    component.detailblk.currentvolume = 'currentvolume Name';
    component.detailblk.volumeunits = 'volumeunits Name';
    component.detailblk.rhesuscode = 'rhesuscode Name';
    component.detailblk.ndexpirydate = 'ndexpirydate Name';
    component.detailblk.unitstatus = 'unitstatus Name';
    component.detailblk.decodedunitstatus = 'decodedunitstatus Name';
    component.detailblk.ndreserveddate1 = 'ndreserveddate1 Name';
    component.detailblk.storageloccode = 'storageloccode Name';
    component.detailblk.ndsimunit = 'ndsimunit Name';
    component.detailblk.ndselectunit = 'ndselectunit Name';
    component.detailblk.ndautologunit = 'ndautologunit Name';
    component.detailblk.nddirectedunit = 'nddirectedunit Name';

    // Call the Create method
    component.Create();

    // Expect the PostAlldetailblkValues method to have been called with the detailblk object
    expect(service.PostAlldetailblkValues).toHaveBeenCalledWith(component.detailblk);

    // Expect the detailblk properties to be reset
    expect(component.detailblk.unitno).toBe('');
    expect(component.detailblk.ndproductcode).toBe('');
    expect(component.detailblk.bloodgroup).toBe('');
    expect(component.detailblk.currentvolume).toBe('');
    expect(component.detailblk.volumeunits).toBe('');
    expect(component.detailblk.rhesuscode).toBe('');
    expect(component.detailblk.ndexpirydate).toBe('');
    expect(component.detailblk.unitstatus).toBe('');
    expect(component.detailblk.decodedunitstatus).toBe('');
    expect(component.detailblk.ndreserveddate1).toBe('');
    expect(component.detailblk.storageloccode).toBe('');
    expect(component.detailblk.ndsimunit).toBe('');
    expect(component.detailblk.ndselectunit).toBe('');
    expect(component.detailblk.ndautologunit).toBe('');
    expect(component.detailblk.nddirectedunit).toBe('');

  });
  it('should log error on update PostAlldetailblkValues failure', () => {
    const error = new Error('PostAlldetailblkValues failed');
    spyOn(service, 'PostAlldetailblkValues').and.returnValue(throwError(() => {
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
      unitno: 'unitno 1',
      ndproductcode: 'ndproductcode 1',
      bloodgroup: 'bloodgroup 1',
      currentvolume: 'currentvolume 1',
      volumeunits: 'volumeunits 1',
      rhesuscode: 'rhesuscode 1',
      ndexpirydate: 'ndexpirydate 1',
      unitstatus: 'unitstatus 1',
      decodedunitstatus: 'decodedunitstatus 1',
      ndreserveddate1: 'ndreserveddate1 1',
      storageloccode: 'storageloccode 1',
      ndsimunit: 'ndsimunit 1',
      ndselectunit: 'ndselectunit 1',
      ndautologunit: 'ndautologunit 1',
      nddirectedunit: 'nddirectedunit 1',
    }];
    spyOn(service, 'GetAlldetailblkValues').and.returnValue(of(mockData));

    component.GetAllValues();

    expect(service.GetAlldetailblkValues).toHaveBeenCalled();
    expect(component.listOfData).toEqual(mockData);
  });
  it('should log error on update GetAllValues failure', () => {
    const error = new Error('GetAllValues failed');
    spyOn(service, 'GetAlldetailblkValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });



  //update
  it('should clear UpdatedetailblkComponent detailblk properties on successful update', () => {
    spyOn(service, 'Updatedetailblk').and.returnValue(of({}));

    component.Update();

    expect(component.detailblk.unitno).toBe('');
    expect(component.detailblk.ndproductcode).toBe('');
    expect(component.detailblk.bloodgroup).toBe('');
    expect(component.detailblk.currentvolume).toBe('');
    expect(component.detailblk.volumeunits).toBe('');
    expect(component.detailblk.rhesuscode).toBe('');
    expect(component.detailblk.ndexpirydate).toBe('');
    expect(component.detailblk.unitstatus).toBe('');
    expect(component.detailblk.decodedunitstatus).toBe('');
    expect(component.detailblk.ndreserveddate1).toBe('');
    expect(component.detailblk.storageloccode).toBe('');
    expect(component.detailblk.ndsimunit).toBe('');
    expect(component.detailblk.ndselectunit).toBe('');
    expect(component.detailblk.ndautologunit).toBe('');
    expect(component.detailblk.nddirectedunit).toBe('');
  });

  it('should log error on update failure', () => {
    const error = new Error('Update failed');
    spyOn(service, 'Updatedetailblk').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Update();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });

  // delete the entity
  it('should call DeletedetailblkValues and call GetAllValues on success', (() => {
    const deleteId = 123;
    const mockData:any = { 
      _id: 1, 
      name: 'test 1',
    };
    const deletedetailblkValuesSpy = spyOn(service, 'DeletedetailblkValues').and.returnValue(of(mockData));
    const gpGetAllValuesSpy = spyOn(component, 'GetAllValues');
    
    component.Delete(deleteId);
  

    expect(deletedetailblkValuesSpy).toHaveBeenCalledWith(deleteId);
    expect(gpGetAllValuesSpy).toHaveBeenCalled();
  }));

  it('should log error on failure', (() => {
    const deleteId = 123;
    const error = new Error('Some error');
    spyOn(console, 'log');
    spyOn(service, 'DeletedetailblkValues').and.returnValue(throwError(error));

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