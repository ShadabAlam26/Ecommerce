// import { HttpClientTestingModule } from "@angular/common/http/testing";
// import { TestBed } from "@angular/core/testing";
// import { Router } from "@angular/router";
// import { AuthService } from "../service/auth.service";
// import { AuthGuard } from "./auth.guard";
// import { Injectable } from '@angular/core';

// describe('',()=>{

//     let auth :AuthGuard;
//     let logService:AuthService;


//     beforeEach(()=>{

//         TestBed.configureTestingModule({
//             imports:[HttpClientTestingModule],
//             providers:[AuthService, AuthGuard,
//                 {provide: Router,useClass: { navigate: () => null }}]
//         })

//         auth = TestBed.inject<AuthGuard>(AuthGuard);
//         logService = TestBed.inject<AuthService>(AuthService)
//     })

//     it('be able to hit route when user is logged in',()=>{
//          let x = true
         
//          logService.loginUser().subscribe(res=>{
//             const user = res.find(x=>x.username==='shadab');
//             if(user)
//             {
                
//                 console.log(!logService.loggedIn);
                
//             }

//          })        

       
//     })


// })

// function flasy(): boolean {
//     return true
// }
