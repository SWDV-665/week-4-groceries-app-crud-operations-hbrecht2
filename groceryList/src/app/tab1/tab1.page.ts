import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'Groceries';
  items = [  ];

  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogService) {
  }

  loadItems(){
    return this.dataService.getItems();
  }

  async removeItem(item, index){
    console.log("Removing Item - ", item, index)
    const toast = await this.toastController.create({
      message: 'Removing ' + item.name + ' from grocery list...',
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async editItem(item, index){
    console.log("Edit Item - ", item, index)
    const toast = await this.toastController.create({
      message: 'Editing ' + item.name + ' from grocery list...',
      duration: 2000
    });
    toast.present();
    this.inputDialogService.presentPrompt(item, index);
  }

  addItem(){
    console.log("Item added.");
    this.inputDialogService.presentPrompt();
  }
}