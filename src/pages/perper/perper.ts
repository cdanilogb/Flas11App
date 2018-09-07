import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ToastController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ActuperPage} from '../actuper/actuper';
import { LoadingController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import {ConectarProvider} from '../../providers/conectar/conectar';



/**
 * Generated class for the PerperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perper',
  templateUrl: 'perper.html',
  
})
export class PerperPage {
    persona;
    calidad;
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public alertCtrl: AlertController,
        private conecta:ConectarProvider,
        public toastCtrl: ToastController,
      private camera: Camera,
      private transfer: FileTransfer,
public loadingCtrl: LoadingController) {
      this.calidad = 50;
      this.persona = this.navParams.get("Data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerperPage');
  }
  imageURI;
   cam() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            
            quality: this.calidad
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.imageURI = `data:image/jpeg;base64,${imageData}`;
            })
            .catch(error => {
                console.error(error);
            });
    }
    sd() {
        let options: CameraOptions = {
            destinationType:1,
            sourceType:0,
            targetWidth: 500,
            targetHeight: 500,
            allowEdit: true,
            mediaType:0,
            correctOrientation:true,
            saveToPhotoAlbum: true,
            encodingType:0
            
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.imageURI = imageData;
            })
            .catch(error => {
                console.error(error);
            });
    }
    
    
    irActuper(persona){
        
        this.navCtrl.push(ActuperPage,{Data:persona});
        
    }

showConfirm() {
        const confirm = this.alertCtrl.create({
            title: 'confirmación su solicitud?',
            message: 'Esta seguro de eliminar al usuario ' + this.persona.nombre+' ?',
            buttons: [
                {
                    text: 'Confirmar',
                    handler: () => {
                        let estado = this.conecta.servidorDelete(this.persona);
                        estado.subscribe(data=>{
                            let res:any = data;
                            if(res.success=="ok"){
                                this.navCtrl.popToRoot();
                            }else{
                                this.presentToast('NO se puede eliminar el usuario');
                            }                      
                        },err=>{
                            this.presentToast('Hay un problema con el servidor');
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    handler: () => {
                        
                    }
                }
            ]
        });
        confirm.present();
    }
    
    presentToast(men) {
    const toast = this.toastCtrl.create({
      message: men,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


  info;
ruta="http://192.168.0.225:8081/flas011/";

 CargarFoto() {
        let loader = this.loadingCtrl.create({
            content: "<b>El archivo esta Cargado...</b>"
        });
        loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();
        var datos = {id: this.persona.id};
        let options: FileUploadOptions = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            httpMethod: 'POST',
            params: datos
        }
    
        fileTransfer.upload(this.imageURI, this.ruta + 'Controller/SubirFoto.php', options)
            .then((data) => {
                this.actualizar(data);
                // this.info = JSON.stringify(data)+" -> Lo que llega";
                loader.dismiss();
            }, (err) => {
                console.log(err);
                loader.dismiss();
               
            });
    }
    actualizar(data: any) {
        if (data.response != "no") {
   
           this.imageURI = this.ruta + "img/" + JSON.parse(data.response).sucess;
            this.info = "La imagen fue cargada";
        } else {
           this.info = "La imagen no fue cargada";
            
        }
    }
}
