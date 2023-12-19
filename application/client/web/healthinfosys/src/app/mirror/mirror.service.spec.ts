import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MirrorService } from './mirror.service';


describe('mirrorService', () => {
  let service: MirrorService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ MirrorService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  
  // get all Values
  it('should retrieve all values getallmirror from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
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
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/mirror`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllmirrorValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const mirror = { 
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
    };

    
    // Make the API call
    service.PostAllmirrorValues(mirror).subscribe(response => {
      expect(response).toEqual(mirror)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/mirror`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mirror);

    // Flush the mocked response
    req.flush(mirror);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const mirror = { 
      id: '12dsadsa',
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
    };
    
    // Make the API call
    service.Updatemirror(mirror).subscribe(response => {
      expect(response).toEqual(mirror);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/mirror`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mirror);

    // Flush the mocked response
    req.flush(mirror);
  });
   
  // delete the mirror 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeletemirrorValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/mirror/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified mirror ID', () => {
    const mirrorId = 123;
    const mockResponse = { 
      id: mirrorId, 
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
    };

    // Make the request
    service.GetEntityById(mirrorId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/mirrorid/`+mirrorId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationmirror
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificmirror(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/mirror/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificmirrorHistory
  it('should send a GET request to the correct URL getSpecificmirrorHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificmirrorHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/mirror/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { mirror: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.Searchmirror(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/mirror/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
