import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryblkService } from './categoryblk.service';


describe('categoryblkService', () => {
  let service: CategoryblkService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ CategoryblkService, { provide: SharedService, useValue: sharedServiceMock } ]
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
  it('should retrieve all values getallcategoryblk from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
      categorycode: 'categorycode 1',
      productcode: 'productcode 1',
      remarks: 'remarks 1',
      ndproductdesc: 'ndproductdesc 1',
      volume: 'volume 1',
      volumeunit: 'volumeunit 1',
      categoryrequested: 'categoryrequested 1',
      ndcategoryreqddate: 'ndcategoryreqddate 1',
      ndtransfuseexpectdatetime: 'ndtransfuseexpectdatetime 1',
      ndautologunit: 'ndautologunit 1',
      nddirectedunit: 'nddirectedunit 1',
      ndaltproduct: 'ndaltproduct 1',
      ndgetunitsfromothfacility: 'ndgetunitsfromothfacility 1',
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/categoryblk`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllcategoryblkValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const categoryblk = { 
      categorycode: 'categorycode 1',
      productcode: 'productcode 1',
      remarks: 'remarks 1',
      ndproductdesc: 'ndproductdesc 1',
      volume: 'volume 1',
      volumeunit: 'volumeunit 1',
      categoryrequested: 'categoryrequested 1',
      ndcategoryreqddate: 'ndcategoryreqddate 1',
      ndtransfuseexpectdatetime: 'ndtransfuseexpectdatetime 1',
      ndautologunit: 'ndautologunit 1',
      nddirectedunit: 'nddirectedunit 1',
      ndaltproduct: 'ndaltproduct 1',
      ndgetunitsfromothfacility: 'ndgetunitsfromothfacility 1',
    };

    
    // Make the API call
    service.PostAllcategoryblkValues(categoryblk).subscribe(response => {
      expect(response).toEqual(categoryblk)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/categoryblk`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(categoryblk);

    // Flush the mocked response
    req.flush(categoryblk);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const categoryblk = { 
      id: '12dsadsa',
      categorycode: 'categorycode 1',
      productcode: 'productcode 1',
      remarks: 'remarks 1',
      ndproductdesc: 'ndproductdesc 1',
      volume: 'volume 1',
      volumeunit: 'volumeunit 1',
      categoryrequested: 'categoryrequested 1',
      ndcategoryreqddate: 'ndcategoryreqddate 1',
      ndtransfuseexpectdatetime: 'ndtransfuseexpectdatetime 1',
      ndautologunit: 'ndautologunit 1',
      nddirectedunit: 'nddirectedunit 1',
      ndaltproduct: 'ndaltproduct 1',
      ndgetunitsfromothfacility: 'ndgetunitsfromothfacility 1',
    };
    
    // Make the API call
    service.Updatecategoryblk(categoryblk).subscribe(response => {
      expect(response).toEqual(categoryblk);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/categoryblk`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(categoryblk);

    // Flush the mocked response
    req.flush(categoryblk);
  });
   
  // delete the categoryblk 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeletecategoryblkValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/categoryblk/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified categoryblk ID', () => {
    const categoryblkId = 123;
    const mockResponse = { 
      id: categoryblkId, 
      categorycode: 'categorycode 1',
      productcode: 'productcode 1',
      remarks: 'remarks 1',
      ndproductdesc: 'ndproductdesc 1',
      volume: 'volume 1',
      volumeunit: 'volumeunit 1',
      categoryrequested: 'categoryrequested 1',
      ndcategoryreqddate: 'ndcategoryreqddate 1',
      ndtransfuseexpectdatetime: 'ndtransfuseexpectdatetime 1',
      ndautologunit: 'ndautologunit 1',
      nddirectedunit: 'nddirectedunit 1',
      ndaltproduct: 'ndaltproduct 1',
      ndgetunitsfromothfacility: 'ndgetunitsfromothfacility 1',
    };

    // Make the request
    service.GetEntityById(categoryblkId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/categoryblkid/`+categoryblkId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationcategoryblk
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificcategoryblk(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/categoryblk/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificcategoryblkHistory
  it('should send a GET request to the correct URL getSpecificcategoryblkHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificcategoryblkHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/categoryblk/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { categoryblk: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.Searchcategoryblk(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/categoryblk/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
