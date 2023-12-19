import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeaderblkService } from './headerblk.service';


describe('headerblkService', () => {
  let service: HeaderblkService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ HeaderblkService, { provide: SharedService, useValue: sharedServiceMock } ]
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
  it('should retrieve all values getallheaderblk from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
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
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/headerblk`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllheaderblkValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const headerblk = { 
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
    };

    
    // Make the API call
    service.PostAllheaderblkValues(headerblk).subscribe(response => {
      expect(response).toEqual(headerblk)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/headerblk`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(headerblk);

    // Flush the mocked response
    req.flush(headerblk);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const headerblk = { 
      id: '12dsadsa',
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
    };
    
    // Make the API call
    service.Updateheaderblk(headerblk).subscribe(response => {
      expect(response).toEqual(headerblk);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/headerblk`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(headerblk);

    // Flush the mocked response
    req.flush(headerblk);
  });
   
  // delete the headerblk 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeleteheaderblkValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/headerblk/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified headerblk ID', () => {
    const headerblkId = 123;
    const mockResponse = { 
      id: headerblkId, 
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
    };

    // Make the request
    service.GetEntityById(headerblkId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/headerblkid/`+headerblkId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationheaderblk
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificheaderblk(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/headerblk/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificheaderblkHistory
  it('should send a GET request to the correct URL getSpecificheaderblkHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificheaderblkHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/headerblk/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { headerblk: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.Searchheaderblk(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/headerblk/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
