import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { UserService } from '../../user.service';
import jspdf, { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {
  
 

  
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

  
  @ViewChild('content', {static:true}) content!: ElementRef<HTMLImageElement>;  

  public SavePDF(): void {  
  html2canvas(this.content.nativeElement).then((canvas)=>{
	const imgData = canvas.toDataURL('image/jpeg');
  
	var pdf = new jsPDF('p','pt','a4'); 


  const imageProps = pdf.getImageProperties(imgData);
  const pdfw = pdf.internal.pageSize.getWidth();
  const pdfh =  (imageProps.height*pdfw)/ imageProps.width;
  pdf.addImage(imgData, 'PNG', 0,0,pdfw,pdfh);
  pdf.save('myp.pdf');

})	
  } 

}
