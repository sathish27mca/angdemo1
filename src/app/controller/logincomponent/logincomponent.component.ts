import { Component } from '@angular/core';

@Component({
  selector: 'app-logincomponent',
  imports: [],
  templateUrl: './logincomponent.component.html',
  styleUrl: './logincomponent.component.css'
})
export class LogincomponentComponent {
//test

  findDifferenceBetweenDates(date1: Date, date2: Date): number {
    const diffInTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffInTime / (1000 * 60 * 60 * 24)); // Difference in days
  }
  getDaysBetweenDates(date1: string, date2: string): number {
    const parsedDate1 = new Date(date1);
    const parsedDate2 = new Date(date2);
    return this.findDifferenceBetweenDates(parsedDate1, parsedDate2);
  }

}
