


var tab_rot16pl = {
        a:'m' , ą:'n' ,b:'ń' , c:'o' , ć:'ó' ,d:'p' ,e:'r' ,ę:'s' ,f:'ś',g:'t' ,h:'u' ,i:'w' ,j:'y' , k:'z' ,l:'ź' , ł:'ż' ,
   m: 'a' ,  n: 'ą' , ń:'b' , o:'c', ó:'ć', p:'d', r:'e', s:'ę' , ś:'f',t:'g' ,u:'h',w:'i',y:'j' ,z:'k',ź:'l',ż:'ł',
   A:'M', Ą:'N',B:'Ń',C:'O', Ć:'Ó', D:'P' ,E:'R', Ę:'S' ,F:'Ś',G:'T', H:'U',  I:'W',J:'Y',K:'Z',L:'Ź', Ł:'Ż',
   M:'A', N:'Ą'  , Ń:'B',O:'C',Ó:'Ć', P:'D' ,R:'E',  S:'Ę',Ś:'F',T:'G', U:'H',  W:'I', Y:'J',Z:'K',Ź:'L' ,Ż:'Ł' };

function check_object_key(obj , key  ){

    if(undefined==obj[key]){  return false;  }

    else  return true;



}


function rot16(text,tab){
    var strout ='';
    var l = text.length;


    for(x=0;x<l;x++){

        if( true=== check_object_key(tab,text[x]) ) { strout = strout  + tab_rot16pl[text[x]];   }

        else
            strout= strout +text[x];

    }




return strout;

}