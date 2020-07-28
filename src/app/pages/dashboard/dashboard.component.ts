import { Component, OnInit } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  globalSummary: any = {
    Global: {
      NewConfirmed: '',
      TotalConfirmed: '',
      NewDeaths: '',
      TotalDeaths: '',
      NewRecovered: '',
      TotalRecovered: '',
    },
  };
  countries: any = [];
  countriesData: any = [];
  search: string;

  title = 'Covid-19 Global Update Using PieChart';
  type = 'PieChart';
  data = [];
  options = {};
  width = 550;
  height = 400;

  constructor(private covid19: Covid19Service) {}

  ngOnInit(): void {
    this.getCountries();
    this.getAllSummary();
  }

  getCountries() {
    this.covid19.getAllCountries().subscribe(
      (response) => {
        this.countries = response;
      },
      (error) => {}
    );
  }

  getAllSummary() {
    this.covid19.getSummary().subscribe(
      (response) => {
        this.globalSummary = response;

        var newConfirmed = ['New Confirmed', this.globalSummary.Global.NewConfirmed];
        var totalConfirmed = ['Total Confirmed', this.globalSummary.Global.TotalConfirmed];
        var newDeaths = ['New Deaths', this.globalSummary.Global.NewDeaths];
        var totalDeaths = ['Total Deaths', this.globalSummary.Global.TotalDeaths];
        var newRecovered = ['New Recovered', this.globalSummary.Global.NewRecovered];
        var totalRecovered = ['Total Recovered', this.globalSummary.Global.TotalRecovered];

        this.data.push(newConfirmed);
        this.data.push(totalConfirmed);
        this.data.push(newDeaths);
        this.data.push(totalDeaths);
        this.data.push(newRecovered);
        this.data.push(totalRecovered);

      },
      (error) => {}
    );
  }

  //Get Country Summary By ID
  getSummaryByCountry(data) {
    this.covid19.getSummaryByCountry(data).subscribe(
      (response) => {
        this.countriesData = response;
      },
      (error) => {}
    );
  }
}
