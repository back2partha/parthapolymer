define(["./my-app.js"],function(_myApp){"use strict";function _templateObject_3901fb60825e11eb9753edf83d0367e1(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n          padding: 10px;\n        }\n      </style>\n\n      <!-- location route to trigger on click event -->\n      <div><app-location route = \"{{route}}\"><app-location></div>\n      <div class=\"loginlink\"><input  class='btnlogout loginlink' type='submit' value='login' on-click=\"login\"></div>\n      \n          <div class=\"bodytxt\">\n              <!-- my staff image -->  \n              <div class=\"flex-item-left\"><img src=\"./images/homeimg.jpg\" width=\"100%\"></div>\n                <p>we are one of <strong>India\u2019s leading healthcare groups with over 7000 beds across 15 hospitals</strong> and have an international presence through our hospital in Malaysia.</p>\n                <p>Our core values are built around the thought of patient-first and that each doctor at <strong>Infosys Hospitals</strong> is a human care expert, going above and beyond the call of duty as they live by the belief that every single life is priceless. When they embark on these journeys, stories emerge - stories of grit, determination and never giving up. Join us on a journey to discover stories that reinforce your belief in 'Life's On'</p>\n                <p><strong>we care</strong></p>\n          </div>\n\n    "]);_templateObject_3901fb60825e11eb9753edf83d0367e1=function _templateObject_3901fb60825e11eb9753edf83d0367e1(){return data};return data}var MyStaff=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(MyStaff,_PolymerElement);function MyStaff(){babelHelpers.classCallCheck(this,MyStaff);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MyStaff).apply(this,arguments))}babelHelpers.createClass(MyStaff,[{key:"login",value:function login(){this.set("route.path","/login")}}],[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_3901fb60825e11eb9753edf83d0367e1())}}]);return MyStaff}(_myApp.PolymerElement);window.customElements.define("my-staff",MyStaff)});