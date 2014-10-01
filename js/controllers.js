var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.forms = [
  {
    "name":"CA Withholding Form",
    "description":"Officially the DE4 EDD Form. Can be found on the State of California website",
    "category":"Employee Form",
    "link":"file://mbsi-srvnas/File_Share/WebInfo/Forms/CA%20DE-4.pdf"
  },
  {
    "name":"Direct Deposit",
    "description":"Need to set up direct deposit? Fill out this form and send it to the Finance Department.",
    "category":"Employee Forms",
    "link":"file://mbsi-srvnas/File_Share/WebInfo/Forms/Direct%20Deposit.doc"
  },
  {
    "name":"DD Cancellation",
    "description":"Use this form to cancel Direct Deposit. Send it to the Finance Department.",
    "category":"Employee Forms",
    "link":"file://mbsi-srvnas/File_Share/WebInfo/Forms/Direct%20Deposit%20Cancellation.pdf"
  },
  {
    "name":"Employee Info Update",
    "description":"This form includes things like emergency contact information, address, phone number, etc.",
    "category":"Employee Forms",
    "link":""
  },
  {
    "name":"Sample Form",
    "description":"This is a sample description. This is just a proof of concept.",
    "category":"Not Categorized",
    "link":""
  }
]
});

