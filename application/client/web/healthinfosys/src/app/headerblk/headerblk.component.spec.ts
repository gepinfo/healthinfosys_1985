import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderblkComponent } from './headerblk.component';
import { HeaderblkService } from './headerblk.service';
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

describe('HeaderblkComponent', () => {
  let component: HeaderblkComponent;
  let fixture: ComponentFixture<HeaderblkComponent>;
  let service: HeaderblkService;
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
      declarations: [ HeaderblkComponent ],
      providers: [ HeaderblkService, NzMessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderblkComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HeaderblkService);
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
  it('should call PostAllheaderblkValues and reset headerblk properties', () => {
    // Create a spy for the Create method of the service
    spyOn(service, 'PostAllheaderblkValues').and.returnValue(of({}));
  
    // Set values for headerblk properties
    component.headerblk.specimenno = 'specimenno Name';
    component.headerblk.specimennolv = 'specimennolv Name';
    component.headerblk.patientid = 'patientid Name';
    component.headerblk.shortname = 'shortname Name';
    component.headerblk.commentcode = 'commentcode Name';
    component.headerblk.bloodgroup = 'bloodgroup Name';
    component.headerblk.bloodgrouplv = 'bloodgrouplv Name';
    component.headerblk.rhesuscode = 'rhesuscode Name';
    component.headerblk.rhesuscodelv = 'rhesuscodelv Name';
    component.headerblk.commentcodelv = 'commentcodelv Name';
    component.headerblk.comments = 'comments Name';
    component.headerblk.ndpriorityind = 'ndpriorityind Name';
    component.headerblk.ndsex = 'ndsex Name';
    component.headerblk.ndageyrs = 'ndageyrs Name';
    component.headerblk.ndagemths = 'ndagemths Name';
    component.headerblk.ndagedays = 'ndagedays Name';
    component.headerblk.reprint = 'reprint Name';
    component.headerblk.ndspecregddatetime = 'ndspecregddatetime Name';
    component.headerblk.print = 'print Name';
    component.headerblk.pbreleaseblood = 'pbreleaseblood Name';
    component.headerblk.pbbbcomm = 'pbbbcomm Name';
    component.headerblk.pbmigtranshist = 'pbmigtranshist Name';

    // Call the Create method
    component.Create();

    // Expect the PostAllheaderblkValues method to have been called with the headerblk object
    expect(service.PostAllheaderblkValues).toHaveBeenCalledWith(component.headerblk);

    // Expect the headerblk properties to be reset
    expect(component.headerblk.specimenno).toBe('');
    expect(component.headerblk.specimennolv).toBe('');
    expect(component.headerblk.patientid).toBe('');
    expect(component.headerblk.shortname).toBe('');
    expect(component.headerblk.commentcode).toBe('');
    expect(component.headerblk.bloodgroup).toBe('');
    expect(component.headerblk.bloodgrouplv).toBe('');
    expect(component.headerblk.rhesuscode).toBe('');
    expect(component.headerblk.rhesuscodelv).toBe('');
    expect(component.headerblk.commentcodelv).toBe('');
    expect(component.headerblk.comments).toBe('');
    expect(component.headerblk.ndpriorityind).toBe('');
    expect(component.headerblk.ndsex).toBe('');
    expect(component.headerblk.ndageyrs).toBe('');
    expect(component.headerblk.ndagemths).toBe('');
    expect(component.headerblk.ndagedays).toBe('');
    expect(component.headerblk.reprint).toBe('');
    expect(component.headerblk.ndspecregddatetime).toBe('');
    expect(component.headerblk.print).toBe('');
    expect(component.headerblk.pbreleaseblood).toBe('');
    expect(component.headerblk.pbbbcomm).toBe('');
    expect(component.headerblk.pbmigtranshist).toBe('');

  });
  it('should log error on update PostAllheaderblkValues failure', () => {
    const error = new Error('PostAllheaderblkValues failed');
    spyOn(service, 'PostAllheaderblkValues').and.returnValue(throwError(() => {
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
      specimenno: 'specimenno 1',
      specimennolv: 'specimennolv 1',
      patientid: 'patientid 1',
      shortname: 'shortname 1',
      commentcode: 'commentcode 1',
      bloodgroup: 'bloodgroup 1',
      bloodgrouplv: 'bloodgrouplv 1',
      rhesuscode: 'rhesuscode 1',
      rhesuscodelv: 'rhesuscodelv 1',
      commentcodelv: 'commentcodelv 1',
      comments: 'comments 1',
      ndpriorityind: 'ndpriorityind 1',
      ndsex: 'ndsex 1',
      ndageyrs: 'ndageyrs 1',
      ndagemths: 'ndagemths 1',
      ndagedays: 'ndagedays 1',
      reprint: 'reprint 1',
      ndspecregddatetime: 'ndspecregddatetime 1',
      print: 'print 1',
      pbreleaseblood: 'pbreleaseblood 1',
      pbbbcomm: 'pbbbcomm 1',
      pbmigtranshist: 'pbmigtranshist 1',
    }];
    spyOn(service, 'GetAllheaderblkValues').and.returnValue(of(mockData));

    component.GetAllValues();

    expect(service.GetAllheaderblkValues).toHaveBeenCalled();
    expect(component.listOfData).toEqual(mockData);
  });
  it('should log error on update GetAllValues failure', () => {
    const error = new Error('GetAllValues failed');
    spyOn(service, 'GetAllheaderblkValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });



  //update
  it('should clear UpdateheaderblkComponent headerblk properties on successful update', () => {
    spyOn(service, 'Updateheaderblk').and.returnValue(of({}));

    component.Update();

    expect(component.headerblk.specimenno).toBe('');
    expect(component.headerblk.specimennolv).toBe('');
    expect(component.headerblk.patientid).toBe('');
    expect(component.headerblk.shortname).toBe('');
    expect(component.headerblk.commentcode).toBe('');
    expect(component.headerblk.bloodgroup).toBe('');
    expect(component.headerblk.bloodgrouplv).toBe('');
    expect(component.headerblk.rhesuscode).toBe('');
    expect(component.headerblk.rhesuscodelv).toBe('');
    expect(component.headerblk.commentcodelv).toBe('');
    expect(component.headerblk.comments).toBe('');
    expect(component.headerblk.ndpriorityind).toBe('');
    expect(component.headerblk.ndsex).toBe('');
    expect(component.headerblk.ndageyrs).toBe('');
    expect(component.headerblk.ndagemths).toBe('');
    expect(component.headerblk.ndagedays).toBe('');
    expect(component.headerblk.reprint).toBe('');
    expect(component.headerblk.ndspecregddatetime).toBe('');
    expect(component.headerblk.print).toBe('');
    expect(component.headerblk.pbreleaseblood).toBe('');
    expect(component.headerblk.pbbbcomm).toBe('');
    expect(component.headerblk.pbmigtranshist).toBe('');
  });

  it('should log error on update failure', () => {
    const error = new Error('Update failed');
    spyOn(service, 'Updateheaderblk').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Update();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });

  // delete the entity
  it('should call DeleteheaderblkValues and call GetAllValues on success', (() => {
    const deleteId = 123;
    const mockData:any = { 
      _id: 1, 
      name: 'test 1',
    };
    const deleteheaderblkValuesSpy = spyOn(service, 'DeleteheaderblkValues').and.returnValue(of(mockData));
    const gpGetAllValuesSpy = spyOn(component, 'GetAllValues');
    
    component.Delete(deleteId);
  

    expect(deleteheaderblkValuesSpy).toHaveBeenCalledWith(deleteId);
    expect(gpGetAllValuesSpy).toHaveBeenCalled();
  }));

  it('should log error on failure', (() => {
    const deleteId = 123;
    const error = new Error('Some error');
    spyOn(console, 'log');
    spyOn(service, 'DeleteheaderblkValues').and.returnValue(throwError(error));

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