import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginComponent } from "./login.component";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AppComponent } from "../app.component";


describe('',()=>{

    let component:LoginComponent;
    let fixture:ComponentFixture<LoginComponent>
    let router = {
        navigate: jasmine.createSpy('navigate')
    };

    beforeEach(async()=>{

        TestBed.configureTestingModule({
            declarations:[LoginComponent],
            imports:[ReactiveFormsModule,FormsModule,RouterTestingModule,HttpClientTestingModule],
            providers:[{Router,useValue: router},AppComponent]
        }).compileComponents();
    })

    beforeEach(()=>{
       
        fixture = TestBed.createComponent(LoginComponent)
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges()
    })

    it('Checking initial form values',()=>{

        const loginFormGroup = component.loginForm;
        const loginFormValues ={
            username:'',
            password:''
        }

        expect(loginFormGroup.value).toEqual(loginFormValues)
    })

    it('Checking userName',()=>{

        const userloginFormValue = component.loginForm.get('username')
        // console.log(userloginFormValue);
        
        expect(userloginFormValue.errors).not.toBeNull();
        expect(userloginFormValue.errors?.required).toBeTruthy();
    })

    it('',()=>{

        // const element :HTMLElement = fixture.nativeElement;
        // const userElement :HTMLElement = element.querySelector('#userName')
        const userElement = fixture.debugElement.nativeElement.querySelector('#loginForms')?.querySelectorAll('input')[0]
        console.log(userElement)
        fixture.detectChanges();
        userElement.value = "sample@gmail.com"
        // userElement. = 'sample@gmail.com';
        userElement.dispatchEvent(new Event('input'));
        expect(component.loginForm.get('username').errors).toBeFalsy('sample@gmail.com');

    })
})