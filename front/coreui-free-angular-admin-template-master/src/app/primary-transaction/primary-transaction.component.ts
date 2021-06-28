import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import jspdf, { jsPDF } from 'jspdf'

import {UserService} from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
 
import { MultiDataSet, SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, ThemeService } from 'ng2-charts';
import html2canvas from 'html2canvas';
import { image,} from 'html2canvas/dist/types/css/types/image';

@Component({
  selector: 'app-primary-transaction',
  templateUrl: './primary-transaction.component.html',
  styleUrls: ['./primary-transaction.component.css']
})
export class PrimaryTransactionComponent implements OnInit {
	
	





	
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


  @ViewChild('content', {static:true}) content!: ElementRef<HTMLImageElement>;  

  public SavePDF(): void {  
  html2canvas(this.content.nativeElement).then((canvas)=>{
	const imgData = canvas.toDataURL('image/jpeg');
  
	const pdf = new jspdf('p', 'pt', 'a2'); 


  const imageProps = pdf.getImageProperties(imgData);
  const pdfw = pdf.internal.pageSize.getWidth();
  const pdfh =  (imageProps.height*pdfw)/ imageProps.width;
  pdf.addImage(imgData, 'PNG', 0,0,pdfw,pdfh);
  pdf.save('myp.pdf');

})	
  } 

	

	 
 

	description:any=[];
	transactiondate:any=[];
	TransactionList: Array<any>;
    username:string;
	primaryTransactionList:  Array<any>;
	amount:any=[];
	amountbyuser:any=[];
	name:any=[];
	AvailableBalance:any=[];
	accountBalance:any=[];
	id:any=[];
	idcount:any=[];
	type:any=[];
	

	constructor(private route: ActivatedRoute, private userService: UserService) {
		this.route.params.forEach((params: Params) => {
     		this.username = params['username'];
		});

		this.getPrimaryTransactionList();
		this.getTransactionList();
		this.subtitle = 'This is some text within a card block.';

	}

	getPrimaryTransactionList() {
		this.userService.getPrimaryTransactionList(this.username).subscribe(
			res => {
				console.log(JSON.parse(JSON.stringify(res))._body);
        		this.primaryTransactionList = JSON.parse(JSON.stringify(res));
				this.primaryTransactionList.forEach(el =>
					this.type.push(el.type)	)
 

					this.primaryTransactionList.forEach(el =>
						this.amountbyuser.push(el.amount)	)	
						
						this.primaryTransactionList.forEach(el =>
							this.AvailableBalance.push(el.availableBalance)	)
							
							this.primaryTransactionList.forEach(el =>
								this.accountBalance.push(el.primaryAccount.accountBalance)	)	

								this.primaryTransactionList.forEach((element: any) =>
								this.transactiondate.push(element.date)		
								)			
								this.primaryTransactionList.forEach((element: any) =>
								this.description.push(element.description)		)	

				
				console.log("description",this.description )
				console.log("primaryTransactionList",this.primaryTransactionList )
				console.log("date",this.transactiondate )
				console.log("type",this.type )
				console.log("amountbyuser",this.amountbyuser )
				console.log("AvailableBalance",this.AvailableBalance )
				console.log("accountBalance",this.accountBalance )
			 
			},
      		error => console.log(error)
		)
	}

	getTransactionList() {
		this.userService.getTransactionList().subscribe(
			res => {
				console.log(JSON.parse(JSON.stringify(res))._body);


        		this.TransactionList = JSON.parse(JSON.stringify(res));
				this.TransactionList.forEach(el =>
					this.amount.push(el.amount)	)

	
					 	
				console.log(" amount",this.amount )

			},
      		error => console.log(error)
		)
	}

	 

	subtitle: string;


	public pieChartOptions: ChartOptions = {
		responsive: true,
	  };
	  public radarChartOptions: RadialChartOptions = {
		responsive: true,
	  };

	  doughnutChartLabels: Label[] = this.description;
	  doughnutChartData: MultiDataSet = [
		this.amountbyuser
	  ];
	  doughnutChartType: ChartType = 'doughnut';
	  public doughnutChartPlugins = [];
	  public doughnutChartLegend = true;


	  public pieChartLabels: Label[] = this.description;
	  public pieChartData: SingleDataSet = this.amountbyuser;
	  public pieChartType: ChartType = 'pie';
	  public pieChartLegend = true;
	  public pieChartPlugins = [];


	public radarChartLabels: Label[] = this.name;
  
	public radarChartData: ChartDataSets[] = [
	  { data:this.amountbyuser, label: 'Product B' },
	  { data:this.AvailableBalance, label: 'Product A' }
	];
	public radarChartType: ChartType = 'radar';

 

    barChartOptions: ChartOptions = {
		responsive: true,
		scales: { xAxes: [{}], yAxes: [{}] },
	  };
	  barChartLabels: Label[] = this.transactiondate;
	  barChartType: ChartType = 'bar';
	  barChartLegend = true;
	  barChartPlugins = [];
	
	  barChartData: ChartDataSets[] = [
		{ data: this.amountbyuser, label: 'amount' },
		{ data: this.AvailableBalance , label: 'available balance' }
	  ];


/* 

	  public lineChartData: Array<object> = [
		{ data: [8,13,1,13,1], label: 'Product A' },
		{ data: [14,1,14,1,14], label: 'Product B' }
	  ];
	  public lineChartLabels: Array<string> = [
		'1',
		'2',
		'3',
		'4',
		'5',
	  ];
	  public lineChartOptions={
		responsive: true,
		maintainAspectRatio: false
	  };
	  public lineChartColors= [
		{
		  // grey
		  backgroundColor: 'rgba(0,158,251,0.1)',
		  borderColor: '#009efb',
		  pointBackgroundColor: '#009efb',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: '#009efb'
		},
		{
		  // dark grey
		  backgroundColor: 'rgba(85,206,99,0.1)',
		  borderColor: '#55ce63',
		  pointBackgroundColor: '#55ce63',
		  pointBorderColor: '#fff',
		  pointHoverBackgroundColor: '#fff',
		  pointHoverBorderColor: '#55ce63'
		}
	  ];
	  public lineChartLegend = false;
	  public lineChartType: ChartType = 'line';
 */



 

  public lineChartData: Array<any> = [
    {data: this.amount, label: 'amount' },
    {data: this.AvailableBalance, label:'AvailableBalance' },
    {data: this.accountBalance, label: ' accountBalance ' },
  ];
  public lineChartLabels: Array<any> = this.transactiondate;
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColors: Array<any> = [
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
  public lineChartType:ChartType  = 'line';


//   {data: this.amount, label: 'amount' },
//   {data: this.AvailableBalance, label:'AvailableBalance' },
//   {data: this.accountBalance, label: ' accountBalance ' },
  
  // PolarArea
  public polarAreaChartLabels: string[] = this.type;
  public polarAreaChartData: number[] = this.amount;
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
