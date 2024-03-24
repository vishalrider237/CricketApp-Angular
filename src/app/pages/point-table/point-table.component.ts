import {Component, OnInit} from '@angular/core';
import {ApiCallService} from "../../services/api-call.service";

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit {
  PointTable:any
  tableHeading:any
     constructor(private apiservice:ApiCallService) {
     }

  ngOnInit(): void {
       this.apiservice.getPointTable().subscribe({
         next:data=>{
           this.PointTable=data
           console.log(this.PointTable)
           this.tableHeading=[...this.PointTable[0]]
           console.log(this.tableHeading)
         },
         error:error=>{
           console.log(error)
         }
       })
  }
}
