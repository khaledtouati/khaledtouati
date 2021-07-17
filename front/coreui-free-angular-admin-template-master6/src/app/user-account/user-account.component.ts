import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import jspdf, { jsPDF } from 'jspdf'
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';
 
import { MultiDataSet, SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { element } from 'protractor';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
	

 

	
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




  @ViewChild('content') content: ElementRef;  
   public SavePDF(): void {  
    let content=this.content.nativeElement;  

 
    let doc = new jspdf('p', 'px', 'a2'); 
    let _elementHandlers =  
    {  
      '#editor':function(element: any,renderer: any){  
        return true;  
      }  
    };  
    doc.html(content,{  
		callback: function(doc){
			doc.save('users.pdf');},
			
			margin:15,
			x: 10,
			y: 10
    });  
  
    
  } 


	public pieChartOptions: ChartOptions = {
		responsive: true,
	  };
	  public radarChartOptions: RadialChartOptions = {
		responsive: true,
	  };
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
	  //
	  linelist:any=[];
	  lineamount:any=[];
	  linebalance:any=[];
	  linedate:any=[];  
	  
	  //
	  doughnutChartLabels: Label[] = this.sumsprimarylistaccount;
	  doughnutChartData: MultiDataSet = [
		this.sumsprimarylistamount
	  ];
	  doughnutChartType: ChartType = 'doughnut';
	  public doughnutChartPlugins = [];
	  public doughnutChartLegend = true;


	  public pieChartLabels: Label[] = this.primarybytype;
	  public pieChartData: SingleDataSet = this.primarybyamount;
	  public pieChartType: ChartType = 'pie';
	  public pieChartLegend = true;
	  public pieChartPlugins = [];

	  public pieChartLabels2: Label[] = this.counttypelist;
	  public pieChartData2: SingleDataSet = this.counttype;
	  public pieChartType2: ChartType = 'pie';
	  public pieChartLegend2 = true;
	  public pieChartPlugins2 = [];


	//   amountbalance:any=[];
	//   availablebalance:any=[];
	//   amountbalancetype:any=[];
	//   countbalancetype:any=[];

  // Radar
  public radarChartLabels: string[] = ['amount', 'count', 'balance'];

  public radarChartData: any = [
    {data: [this.amountbalance[0], this.availablebalance[0], this.countbalancetype[0]], label: 'trasnfert'},
    {data: [this.amountbalance[1], this.availablebalance[1], this.countbalancetype[1]], label: 'account'}
  ];
  public radarChartType: ChartType = 'radar';


/* 	public radarChartLabels: Label[] = this.name;
  
	public radarChartData: ChartDataSets[] = [
	  { data:this.id, label: 'transfert' },
	  { data:this.id, label: 'account' }
	];
	public radarChartType: ChartType = 'radar';
 */


	constructor(private userservice: UserService, private router: Router) {
	 this.getUsers();
	 this.sumsprimary();
	 this.primarysavebytype();
	 this.countbytype();
	 this.linechar();
	 this.primaryamountbalance();
	 monkeyPatchChartJsTooltip();
	 monkeyPatchChartJsLegend();
	 this.subtitle = 'This is some text within a card block.';
	}
	
 

    barChartOptions: ChartOptions = {
		responsive: true,
		scales: { xAxes: [{}], yAxes: [{}] },
	  };
	  barChartLabels: Label[] = this.counttypelist ;
	  barChartType: ChartType = 'bar';
	  barChartLegend = true;
	  barChartPlugins = [];
	
	  barChartData: ChartDataSets[] = [
		{ data: this.amountbalance, label:"amount" },
		{ data:  this.availablebalance, label:"available balance" }
	  ];

 

	getUsers() {
		this.userservice.getUsers().subscribe(
			res => {
        		this.userList = JSON.parse(JSON.stringify(res));
				this.userList.forEach(el =>
					this.name.push(el.username)	)

					this.userList.forEach(el =>
						this.id.push(el.userId)	)				
				console.log("tesssst",this.name )
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
		
		primaryamountbalance() {
			this.userservice.primaryamountbalance().subscribe(
				res => {
					this.amountbalancelist = JSON.parse(JSON.stringify(res));
					this.amountbalancelist.forEach((element: any) =>
					
						this.amountbalance.push(element[0])	)
					 
						this.amountbalancelist.forEach((element: any) =>
							this.availablebalance.push(element[1])	)

							this.amountbalancelist.forEach((element: any) =>
							this.amountbalancetype.push(element[2])	)			
							
							this.amountbalancelist.forEach((element: any) =>
							this.countbalancetype.push(element[3])	)	
				 
					console.log("amountbalancelist",this.amountbalancelist )
					console.log("amountbalance",this.amountbalance )
					console.log("availablebalance",this.availablebalance )
					console.log("amountbalancetype",this.amountbalancetype )
					console.log("countbalancetype",this.countbalancetype )
					console.log("msg" ,this.amountbalance[0])
				  },
				  
				  error => console.log(error)
				  
			)
		
			} 

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
		
			} 

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
		
			} 
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
					  
					  error => console.log(error)
					  
				)
			
				} 
 

	onSelectPrimary(username: string) {
    	this.router.navigate(['/primaryTransaction', username]);
  	}	

  	onSelectSavings(username: string) {
    	this.router.navigate(['/savingsTransaction', username]);
  	}	

  	enableUser(username: string) {
  		this.userservice.enableUser(username).subscribe();
  		location.reload();
  	}

  	disableUser(username: string) {
  		this.userservice.disableUser(username).subscribe();
  		location.reload();
  	}

	//   lineamount:any=[];
	//   linebalance:any=[]; 


	  public lineChartData: Array<object> = [
		{ data: this.lineamount, label: 'amount' },
		{ data: this.linebalance, label: 'available balance' }
	  ];
	  public lineChartLabels: Array<string> = this.linedate;
	  
	//   [
	// 	'1',
	// 	'2',
	// 	'3',
	// 	'4',
	// 	'5',
	//   ];
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
  
}
function res(arg0: string, res: any): import("rxjs").PartialObserver<Object> | undefined {
	throw new Error('Function not implemented.');
}

function useForm(arg0: string): [any, any] {
	throw new Error('Function not implemented.');
}

