import{PolymerElement,html}from"./my-app.js";class MyRegisterhome extends PolymerElement{static get template(){return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }

        .ioimage{
          opacity:0.5;padding:0px 20px; box-sizing:border-box;
        }
        
      </style>

      <!-- location route to trigger on click event -->
      <div><app-location route = "{{route}}"><app-location></div> 
      <div class="logout"><input class='btnlogout' type='submit' value='logout' on-click="logout"></div>
            
            
      <!-- child navigation -->
      <div class="childnav">
        <a name="register" class="btnSubmit login logreg" href="[[rootPath]]register">In / Out Patient records</a> 
        <a name="emergencycontact"  class="btnSubmit login logreg" href="[[rootPath]]emergencycontact">Emergency Contact</a>
        <a name="mystaff" class="btnSubmit login logreg"  href="[[rootPath]]mystaff">My Staff</a>
      </div>
      

      <!-- in and out patient image-->
      <div class="flex-item-left"><img src="./images/in-out-patient.jpg" width="100%" class="ioimage"></div>
      
      
      <div class="bodytxt">  
        <p>The world perceives us as a <strong>low-cost Indian healthcare service provider</strong>; what we are engaged in is a passionate journey to establish ourselves as the lowest-cost, high-quality healthcare service provider in the world.</p>
        <p>At Infosys Health, we will continue to trust what has worked for us in the past. We will keep our model predominantly asset-light; we will reinvest our accruals; we will engage with governments for land and help them achieve affordable healthcare promises made to their constituencies; we will rent premises from private owners and create small-to-large clinics within existing hospitals. As a result of this flexible approach, we will commission hospitals, medical facilities, and clinics across the breadth of this country, getting closer to patients and taking the promise of quality affordable healthcare to the doorstep of the country's millions.</p>
        <p>It is this exciting prospect that stokes my motivation to do bigger and better for the glory of the country that is mine.</p>
      </div>
    `}logout(){this.set("route.path","/login")}}window.customElements.define("my-registerhome",MyRegisterhome);