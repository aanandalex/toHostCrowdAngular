import { Component, OnInit } from '@angular/core';
import { DashService } from '../dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  success: number;
  crowdfunding: number;
  successPer: number = 0;
  crowdfund: number = 0;
  total: number;
  title = 'Crowd Funded Projects';
  type = 'PieChart';
  data1: Array<any> = [];
  a1: Array<any> = ['Projects Successful'];
  a2: Array<any> = ['CrowdFunding Projects'];
  columnNames = ['Projects', 'Percentage'];
  options = {};
  width = 550;
  height = 440;

  constructor(private dashService: DashService) { }

  isLoading = false;


  ngOnInit() {
    this.isLoading = true;
    this.dashService.crowdFunding().subscribe((Response: Array<Object>) => {
      this.isLoading = false;
      this.crowdfunding = Response.length;
    })

    this.isLoading = true;
    this.dashService.projectSuccess().subscribe((Response: Array<Object>) => {
      this.isLoading = false;
      this.success = Response.length;
    })

    this.isLoading = true;
    this.dashService.totalNoOfProject().subscribe((Response: Array<Object>) => {
      this.isLoading = false;
      this.total = Response.length;
    })

    setTimeout(()=>{
      this.isLoading = true;
      this.successPer = Math.round((this.success/this.total)*100);
      this.crowdfund = Math.round((this.crowdfunding/this.total)*100);
      this.a1.push(this.successPer);
      this.a2.push(this.crowdfund);
      this.data1.push(this.a1);
      this.data1.push(this.a2);
    }, 3000,this.isLoading = false);
  }

}
