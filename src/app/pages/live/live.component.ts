import {Component, OnInit} from '@angular/core';
import {ApiCallService} from "../../services/api-call.service";
import {MatchCardComponent} from "../../components/match-card/match-card.component";



@Component({
  selector: 'app-live',
  standalone: true,
  imports: [
    MatchCardComponent
  ],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit {
  liveMatches:any
  loading = false
         constructor(private apicall:ApiCallService) {
         }

  ngOnInit(): void {
          this.loadLiveMatches()
  }
  private loadLiveMatches(){
    this.loading = true
    this.apicall.getLiveMatches().subscribe({
      next:data=>{
        this.liveMatches=data
        console.log(data)
        this.loading = false
      },
      error:error=>{
        console.log(error)
        this.loading = false
      }
    })
  }
  refreshScore() {


    this.loadLiveMatches()
  }

}
