define(["./my-app.js"],function(_myApp){"use strict";class EmergencyContact extends _myApp.PolymerElement{static get template(){return _myApp.html`
    
    <!--material design support script and style -->
    <script  src = "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js"> </script>
    <link rel = "stylesheet" href = "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css">
    
    
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }

        .wide-card.mdl-card {
          width: 512px;
       }
    
       .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
        text-align:center;
      }
      
      .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
      }
      
      .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
      }
      h3 {
        font-size:16px;
        font-family:arial!important;
      }
      </style>


      <!-- location route to trigger on click event -->
      <div><app-location route = "{{route}}"><app-location></div>
      <div class="logout"><input class='btnlogout' type='submit' value='logout' on-click="logout"></div>
      
    
      <div class="bodytitle">
      <h3>Emergency Contact</h3>
      </div>
      
          <!-- material deisgn wide card  -->
          <div style="padding-left:20px;">
             <div class="container">
                            <table>
                                  <tr>
                                    <td>
                                        <div class = "wide-card mdl-card mdl-shadow--2dp">
                                          <div class = "mdl-card__title">
                                              <h2 class = "mdl-card__title-text">Physician</h2>
                                          </div>
                                        
                                          <div class = "mdl-card__supporting-text">
                                          A physician (American English), medical practitioner, medical doctor, or simply doctor, is a professional who practices medicine, which is concerned with promoting, maintaining, or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments. 
                                          </div>

                                          <div class="tooltip">
                                          <img src="/images/phone.png">
                                            <span class="tooltiptext">9845318833</span>
                                            </div>
                                        </div>
                                    </td>
                                  </tr>
                            </table>
                            
                            <table>
                                <tr>
                                  <td>
                                      <div class = "wide-card mdl-card mdl-shadow--2dp">
                                        <div class = "mdl-card__title">
                                            <h2 class = "mdl-card__title-text">Cardiologists</h2>
                                        </div>
                                      
                                        <div class = "mdl-card__supporting-text">
                                            They’re experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.
                                        </div>
                                      
                                        <div class="tooltip">
                                        <img src="/images/phone.png">
                                          <span class="tooltiptext">9845318833</span>
                                        </div>
                                      
                                      </div>
                                  </td>
                                </tr>
                            </table>

                            
                            <table>
                                <tr>
                                  <td>
                                      <div class = "wide-card mdl-card mdl-shadow--2dp">
                                        <div class = "mdl-card__title">
                                            <h2 class = "mdl-card__title-text">Anesthesiologists</h2>
                                        </div>
                                      
                                        <div class = "mdl-card__supporting-text">
                                        These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. They monitor your vital signs while you’re under anesthesia.
                                        </div>

                                        <div class="tooltip">
                                        <img src="/images/phone.png">
                                          <span class="tooltiptext">9845318833</span>
                                          </div>
                                      
                                      </div>
                                  </td>
                                </tr>
                            </table>

              </div>
          </div>

      <!-- navigation components -->
      <div class="childnavbtm">
      <a name="mystaff" class="btnSubmit login logreg"  href="[[rootPath]]mystaff">My Staff</a>
      <a name="register" class="btnSubmit login logreg" href="[[rootPath]]register">In / Out Patient records</a> 
      </div>
      

    `}logout(){this.set("route.path","/login")}}window.customElements.define("emergency-contact",EmergencyContact)});