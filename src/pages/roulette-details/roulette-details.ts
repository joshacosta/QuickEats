import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

/**
 * Generated class for the RouletteDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roulette-details',
  templateUrl: 'roulette-details.html',
})
export class RouletteDetailsPage {
  public locationsData: any;
  public tags: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator) {
    this.locationsData = navParams.get('locations');
    this.tags = this.locationsData.type.join(", ");
    console.log(this.tags);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RouletteDetailsPage');
  }

  goToNavigation(){
    // let options: LaunchNavigatorOptions = {
    //   start: 'London, ON',
    //   app: LaunchNavigator.getSupportedPlatforms.
    // }
    
    // this.launchNavigator.navigate('Toronto, ON', options)
    //   .then(
    //     success => console.log('Launched navigator'),
    //     error => console.log('Error launching navigator', error)
    //   );

    this.launchNavigator.navigate(this.locationsData.address);
  }

}
