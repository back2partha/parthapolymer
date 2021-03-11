define(["./my-app.js"],function(_myApp){"use strict";class MyLogin extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        .flex-container {
          display: flex;
          flex-direction:row;
          font-size: 30px;
          text-align: left;
        }
        
        .flex-item-left {
          padding: 10px;
          flex: 50%;
        }
        
        .flex-item-right {
          padding: 10px;
          flex: 50%;
        }

        .floated-label-placeholder{
          font-size:30px!important;
        }


        /* Responsive layout - makes a one column layout instead of a two-column layout */
        @media (max-width: 600px) {
          .flex-container {
            flex-direction: column;
          }
        }
        
      </style>

      <!-- login screen -->
      <div class="flex-container">
      <div><app-location route = "{{route}}"><app-location></div>
        <div class="flex-item-left"><img src="./images/doctor.png" width="100%" style="opacity:0.3"></div>
        <div class="flex-item-right">
        
        <h5>Login</h5>

        <paper-input value="{{Username}}" label="username" auto-validate required error-message='please type your username'></paper-input>
        <paper-input value="{{Password}}"  type="password" label='password' auto-validate required error-message='please type your password'></paper-input>        
        <paper-button class='btnSubmit login' id="login-btn" type="submit" toggles raised class="red" on-click="gotoregisterhome">Login</paper-button>
      </div>


    `}redirect(){this.set("route.path","/registerhome")}gotoregisterhome(){if("partha"==this.Username&&"welcome@123"==this.Password){this.set("route.path","/registerhome")}else{alert("Plese fill correct details")}}// login validation fields and if condition to submit button
}window.customElements.define("my-login",MyLogin)});