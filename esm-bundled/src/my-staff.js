import{PolymerElement,html}from"./my-app.js";class MyStaff extends PolymerElement{static get template(){return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <!-- location route to trigger on click event -->
      <div><app-location route = "{{route}}"><app-location></div>
      <div class="loginlink"><input  class='btnlogout loginlink' type='submit' value='login' on-click="login"></div>
      
          <div class="bodytxt">
              <!-- my staff image -->  
              <div class="flex-item-left"><img src="./images/homeimg.jpg" width="100%"></div>
                <p>we are one of <strong>India’s leading healthcare groups with over 7000 beds across 15 hospitals</strong> and have an international presence through our hospital in Malaysia.</p>
                <p>Our core values are built around the thought of patient-first and that each doctor at <strong>Infosys Hospitals</strong> is a human care expert, going above and beyond the call of duty as they live by the belief that every single life is priceless. When they embark on these journeys, stories emerge - stories of grit, determination and never giving up. Join us on a journey to discover stories that reinforce your belief in 'Life's On'</p>
                <p><strong>we care</strong></p>
          </div>

    `}login(){this.set("route.path","/login")}}window.customElements.define("my-staff",MyStaff);