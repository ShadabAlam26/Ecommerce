import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service"

describe('LoginService',()=>{

    const user = [
        {
          "id": 1,
          "username": "shadab",
        },
        {
          "id": 2,
          "username": "sasi",
     
        },
        {
          "id": 3,
          "username": "abhishek",
        },
        {
          "id": 4,
          "username": "rajnish",
        }
      ]

    let loginService : AuthService;
    let httpController : HttpTestingController;
    let router = {
        navigate: jasmine.createSpy('navigate')
    };

    beforeEach(()=>{
        TestBed.configureTestingModule({

            imports:[HttpClientTestingModule],
            providers:[AuthService,
                {provide: Router, useValue: router}]
        })

       loginService =  TestBed.inject<AuthService>(AuthService);
       httpController = TestBed.inject<HttpTestingController>(HttpTestingController)
        
    })

    it('Checking login of user',()=>{

        loginService.loginUser().subscribe(res=>{

            expect(res).toBeTruthy('No Users Registered');
            expect(res.length).toBe(4,'Registration not happened');
            
            const user = res.find(x=>x.username==='shadab')
            expect(user).toBeDefined('User Not present');
            

        });

       const req =  httpController.expectOne('http://localhost:3000/registerUsers');
       expect(req.request.method).toEqual('GET');
       req.flush(user);

       httpController.verify()
         
    })
})