import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RouletteDetailsPage } from "../roulette-details/roulette-details"

//import * as locations from "../../assets/data/restaurants.json"

/**
 * Generated class for the RoulettePage page.../
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roulette',
  templateUrl: 'roulette.html',
})
export class RoulettePage {
  public locationsData: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locationsData = [
      {
          "name": "Blue Sky",
          "rating": "4.4",
          "address": "3216 4th St, Lubbock, TX 79415",
          "type": ["American", "Burgers"],
          "price": "$$$",
          "imgURL": "http://www.blueskytexas.com/4th.jpg"
      },
      {
          "name": "Chipotle",
          "rating": "4.4",
          "address": "2411 Glenna Goodacre Blvd, Lubbock, TX 79401",
          "type": ["Mexican Grill"],
          "price": "$$",
          "imgURL": "https://fastly.4sqi.net/img/general/600x600/66898335_5isfU_CQ9R3YW9ieXc7cOVFl28fYdnn_7Ac1z89abz8.jpg"
      },
      {
          "name": "Thai Pepper",
          "rating": "4.5",
          "address": "3702 20th St, Lubbock, TX 79410",
          "type": ["Thai", "Asian"],
          "price": "$$",
          "imgURL": "https://lh5.googleusercontent.com/p/AF1QipP-jUMmDnc8kFCUMrB4pNd83aW6a0gkHZwWCITz=w600-h321-p-k-no"
      }
    ]


    console.log(this.locationsData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoulettePage');
  }



  openRouletteDetails(){
    this.navCtrl.push(RouletteDetailsPage, {locations: this.getRandom()});
  }

  getRandom(){
    return this.locationsData[Math.floor(Math.random()*Math.floor(this.locationsData.length))]
  }

}
