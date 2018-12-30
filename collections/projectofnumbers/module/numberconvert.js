// class constructor {

//      numToWords = n => {
//         let a = [
//           '', 'one', 'two', 'three', 'four',
//           'five', 'six', 'seven', 'eight', 'nine',
//           'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//           'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
//         ];
//         let b = [
//           '', '', 'twenty', 'thirty', 'forty',
//           'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
//         ];
//         let g = [
//           '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
//           'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
//         ];

class converter {


    constructor( dg, tn, tw){
        this.obj ={

           

            dg :['zero', 'one', 'two', 'three', 'four',
                'five', 'six', 'seven', 'eight', 'nine'],
            
           tn :['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'],
            
            tw :['twenty', 'thirty', 'forty', 'fifty',
                'sixty', 'seventy', 'eighty', 'ninety']
            

        }
    }
    

numtoWords(num1 , num2 , num3) {

    action = '';
if (num3>0)
 action +=num3.print()+" ";


 if(num2.number > 0 || num1.number >0){
     action +="and";

return action;
     

 }



 }

    




    



}