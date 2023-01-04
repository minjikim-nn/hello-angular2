import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { boardService } from 'src/app/http/boardService';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  chart: any;
  workList: any;
  workListName: any;
  name: any;
  constructor(protected service: boardService){

  }
  // 값을 한꺼번에 불러와서 필터처리하는게 나은지(중복제거)
  // 하나씩 불러와서 chart에 뿌려주는 것이 나은지?
  // --> 서버에서 정리한 후 가져오는것이 제일 좋음
  // 값이 많을 경우 화면에서 오래걸리기 때문, 화면에서 값을 조정할 수 있기때문
  ngOnInit(): void {
    // this.service.getWorkList().subscribe((res) => {
    //   this.workList = res;
    //   console.log(this.workList);
    //   // workList의 중복제거하고 이름 보내서 각각 값을 가져와야하는지?
    //   this.service.getWorkListName('사장님').subscribe((res) => {
    //     this.workListName = res;
    //     // 갯수
    //     console.log(this.workListName[0].name, this.workListName.length);
    //   })

    // });
    this.service.getWorkCount().subscribe((res) => {
      this.workList = res;
      this.drawChart(res);
    })


  }


  drawChart(res: any) {
    this.chart = echarts.init(document.querySelector('.chart') as HTMLElement);
    this.chart.setOption({
      title: {
        text: 'CHART',
      },
      color: [
        '#2f4554',
      ],
      // 이건 뭐지 --> 상단에 표시해주는 ?
      legend: {
        show: true,
        date: ['data1', 'data2']
      },
      tooltip: {},
      xAxis: {
        // name 값 가져오기 --> 사장님, 헛개차 등
        data: res.nameList
      },
      yAxis: {},
      // style
      series: [
        {
          // name: 'sales', // 위에 기재됨
          type: 'bar',
          // 출근 횟수?
          data: res.cntList,
        }
      ]
    })
  }
}
