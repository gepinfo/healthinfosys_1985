import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DetailblkService } from './detailblk.service';


describe('detailblkService', () => {
  let service: DetailblkService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ DetailblkService, { provide: SharedService, useValue: sharedServiceMock } ]
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
  it('should retrieve all values getalldetailblk from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
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
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/detailblk`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAlldetailblkValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const detailblk = { 
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
    };

    
    // Make the API call
    service.PostAlldetailblkValues(detailblk).subscribe(response => {
      expect(response).toEqual(detailblk)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/detailblk`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(detailblk);

    // Flush the mocked response
    req.flush(detailblk);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const detailblk = { 
      id: '12dsadsa',
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
    };
    
    // Make the API call
    service.Updatedetailblk(detailblk).subscribe(response => {
      expect(response).toEqual(detailblk);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/detailblk`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(detailblk);

    // Flush the mocked response
    req.flush(detailblk);
  });
   
  // delete the detailblk 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeletedetailblkValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/detailblk/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified detailblk ID', () => {
    const detailblkId = 123;
    const mockResponse = { 
      id: detailblkId, 
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
    };

    // Make the request
    service.GetEntityById(detailblkId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/detailblkid/`+detailblkId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationdetailblk
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificdetailblk(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/detailblk/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificdetailblkHistory
  it('should send a GET request to the correct URL getSpecificdetailblkHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificdetailblkHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/detailblk/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { detailblk: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.Searchdetailblk(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/detailblk/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
