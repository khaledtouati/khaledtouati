import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import jspdf, { jsPDF } from 'jspdf'
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

	title = 'angulardatatables';
	dtOptions: any = {};
	ngOnInit() {
	  this.dtOptions = {
		pagingType: 'full_numbers',
		pageLength: 3,
		processing: true,
		dom: 'Bfrtip',
		  buttons: [
			  'copy', 'csv', 'excel', 'print'
		  ]
	  };
  }


 
 



  subtitle: string;
  userList: Array<any>;
  name:any=[];
  id:any=[];
  //
  sumsprimarylist:any=[];
  sumsprimarylistamount:any=[];
  sumsprimarylistaccount:any=[];
  //
  primarybytypelist:any=[];
  primarybyamount:any=[];
  primarybytype:any=[];
  //
  countbytypelist:any=[];
  counttypelist:any=[];
  counttype:any=[];
  //
  amountbalancelist:any=[];
  amountbalance:any=[];
  availablebalance:any=[];
  amountbalancetype:any=[];
  countbalancetype:any=[];
  amountbalancefirst:any=[];
  amountbalancesec:any=[];
  availablebalance1:any=[];
  availablebalance2:any=[];
  countbalancetype1:any=[];
  countbalancetype2:any=[];
  //
  linelist:any=[];
  lineamount:any=[];
  linebalance:any=[];
  linedate:any=[];  
  
  //

	constructor(private userservice: UserService, private router: Router) {
    this.getUsers();
    this.sumsprimary();
    this.primarysavebytype();
    this.countbytype();
    this.linechar();
    this.primaryamountbalance();
 
    this.subtitle = 'This is some text within a card block.';
   }


   getUsers() {
		this.userservice.getUsers().subscribe(
			res => {
        		this.userList = JSON.parse(JSON.stringify(res));
				this.userList.forEach(el =>
					this.name.push(el.username)	)

					this.userList.forEach(el =>
						this.id.push(el.userId)	)	
            	 
				console.log("userList",this.userList )			
				console.log("name",this.name )
				console.log("tesssst",this.id )

      		},
			  
      		error => console.log(error)
			  
		)
	
		} ;
       
		linechar() {
			this.userservice.linechar().subscribe(
				res => {
					this.linelist = JSON.parse(JSON.stringify(res));
					this.linelist.forEach((element: any) =>
					
						this.lineamount.push(element.amount)	)
					 
						this.linelist.forEach((element: any) =>
							this.linebalance.push(element.availableBalance)		)

							this.linelist.forEach((element: any) =>
							this.linedate.push(element.date)		)		
				 
					console.log("linelist",this.linelist )
					console.log("lineamount",this.lineamount )
					console.log("linebalance",this.linebalance )
					console.log("linebalance",this.linedate )
				  },
				  
				  error => console.log(error)  
			)	
	} 
//////////////////////
  primaryamountbalance() {
    this.userservice.primaryamountbalance().subscribe(
      res => {
        this.amountbalancelist = JSON.parse(JSON.stringify(res));
        this.amountbalancelist.forEach((element: any) =>
        
          this.amountbalance.push(element[0])	)
         
          this.amountbalancelist.forEach((element: any) =>
            this.availablebalance.push(element[1])	)

            this.availablebalance1 = this.availablebalance[0];
            this.availablebalance2 = this.availablebalance[1];

            this.amountbalancelist.forEach((element: any) =>
            this.amountbalancetype.push(element[2])	)			
            
            this.amountbalancelist.forEach((element: any) =>
            this.countbalancetype.push(element[3])	)	
            this.countbalancetype1 = this.countbalancetype[0];
            this.countbalancetype2 = this.countbalancetype[1];


            this.amountbalancefirst = this.amountbalance[0];
            this.amountbalancesec = this.amountbalance[1];

       
        console.log("amountbalancelist",this.amountbalancelist )
        console.log("amountbalance",this.amountbalance )
        console.log("availablebalance",this.availablebalance )
        console.log("amountbalancetype",this.amountbalancetype )
        console.log("countbalancetype",this.countbalancetype )
        console.log("msg" ,this.amountbalance[0])
        console.log("msg" ,this.amountbalancefirst)
        },
        
        error => console.log(error)     )
    } 
/////////////////////

countbytype() {
  this.userservice.countbytype().subscribe(
    res => {
      this.countbytypelist = JSON.parse(JSON.stringify(res));
      this.countbytypelist.forEach((element: any) =>
      
        this.counttypelist.push(element[2])	)
       
        this.countbytypelist.forEach((element: any) =>
          this.counttype.push(element[0])	)			
     
      console.log("countbytypelist",this.countbytypelist )
      console.log("counttypelist",this.counttypelist )
      console.log("counttype",this.counttype )
      },
      
      error => console.log(error) 
  )
  } /////////////////////
  
  sumsprimary() {
    this.userservice.sumsprimary().subscribe(
      res => {
        this.sumsprimarylist = JSON.parse(JSON.stringify(res));
        this.sumsprimarylist.forEach((element: any) =>
        
          this.sumsprimarylistaccount.push(element[2].accountNumber)	)
         
          this.sumsprimarylist.forEach((element: any) =>
            this.sumsprimarylistamount.push(element[0])	)			
        console.log("tesssst",this.name )
        console.log("sumsprimarylist",this.sumsprimarylist )
        console.log("sumsprimarylistamount",this.sumsprimarylistamount )
        console.log("sumsprimarylistaccount",this.sumsprimarylistaccount )
        },
        
        error => console.log(error)
        
    )
  
    }      //////////////////


    primarysavebytype() {
      this.userservice.primarysavebytype().subscribe(
        res => {
          this.primarybytypelist = JSON.parse(JSON.stringify(res));
          this.primarybytypelist.forEach((element: any) =>
            this.primarybytype.push(element[1])	)
  
            this.primarybytypelist.forEach((element: any) =>
            this.primarybyamount.push(element[0])	)				

            console.log("primarybytypelist",this.primarybytypelist )
            console.log("primarybytype",this.primarybytype )
            console.log("primarybyamount",this.primarybyamount )
  
          },
          
          error => console.log(error))
    
        } /////////////
          
      



  // lineChart
  public lineChartData: Array<any> = [
		{ data: this.lineamount, label: 'amount' },
		{ data: this.linebalance, label: 'available balance' }
  ];
  public lineChartLabels: Array<string> = this.linedate;
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: Label[] = this.counttypelist ;
    public barChartType = 'bar';
  public barChartLegend = true;

  barChartData: ChartDataSets[] = [
		{ data: this.amountbalance, label:"amount" },
		{ data:  this.availablebalance, label:"available balance" }
	  ];


  // Doughnut
  public doughnutChartLabels: string[] = this.name;
  public doughnutChartData: number[] = this.linebalance;
  public doughnutChartType = 'doughnut';

  doughnutChartLabels2: Label[] = this.name;
  doughnutChartData2: MultiDataSet = [
  this.sumsprimarylistamount
  ];
  public doughnutChartType2 = 'doughnut';



  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType = 'radar';

  // Pie

  public pieChartLabels: Label[] = this.primarybytype;
  public pieChartData: SingleDataSet = this.primarybyamount;
  public pieChartType = 'pie';



  public pieChartLabels2: Label[] = this.counttypelist;
  public pieChartData2: SingleDataSet = this.counttype;
  public pieChartType2 = 'pie';
  public pieChartLegend2 = true;
  public pieChartPlugins2 = [];

  // PolarArea
  
  public polarAreaChartLabels: string[] = this.name;
  public polarAreaChartData: number[] = this.lineamount;
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  radioModel: string = 'Month';

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A',
      barPercentage: 0.6,
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
 





	onSelectPrimary(username: string) {
    this.router.navigate(['/primaryTransaction', username]);
  }	

  onSelectSavings(username: string) {
    this.router.navigate(['/savingsTransaction', username]);
  }	






  
}
