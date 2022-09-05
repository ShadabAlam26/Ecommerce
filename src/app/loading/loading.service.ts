import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LoadingService
{
    private loadingDetail = new BehaviorSubject<boolean>(false);
    loading$:Observable<boolean> = this.loadingDetail.asObservable();

    loadingSpinnerOn()
    {
        this.loadingDetail.next(true);
        
    }

    loadingSpinnerOff()
    {
        this.loadingDetail.next(false);
    }
}