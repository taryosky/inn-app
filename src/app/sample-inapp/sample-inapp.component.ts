import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

@Component({
  selector: 'app-sample-inapp',
  templateUrl: './sample-inapp.component.html',
  styleUrls: ['./sample-inapp.component.css']
})
export class SampleInappComponent implements OnInit {
  private sim: any = null;
  ngOnInit(): void {
    this.sim = {
      apiKey: "AIzaSyAb2E1ZmxP0tZJ9XQhmmJVhlahXmVBNTAw",
      authDomain: "africhange-project.firebaseapp.com",
      projectId: "africhange-project",
      storageBucket: "africhange-project.appspot.com",
      messagingSenderId: "111758625240",
      appId: "1:111758625240:web:f290a7bd22f5cea76e0aad",
      measurementId: "G-R0CQZMRGD4"
    };

    var app = initializeApp(this.sim);

    let messaging = getMessaging(app);

    this.requestPermission();

    var m = getMessaging()
    getToken(m, {vapidKey: "BKFvrxvGJvnpjNa_uzXz-nUZ4bNOKfGQ7g3vt_tXbjZRB3qRw94oALiFyZwks5o_XNYIkyi1PamzU5xWPweWUcc"}).then((token) =>{
      if(token){
        console.log(token);
      }else{
        console.log("heloworld")
      }
    }).catch((err) => {
      console.log(err)
    })

    onMessage(m, (p) => {
      console.log(p);
    })
  }

  requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    })
  }
}
