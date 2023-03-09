        

         
var labels = [];

var y = [1,1,-4,1,1,5,1,-2.4,1,1,1,1,-4,1,1,5,1,-2.4,1,1,11,1,1,1,3,-1,5,-4,1,1,5,1,-2.34,1,1,1,1 ];

//6.62, 0.21, 1.03, 0.03, 0.09, 0, 0.44, 0.04, 0

BC_milk =   [ 6.62, 0.21, 1.03, 0.03, 0.09, 0, 0.44, 0.04, 0 ];
BC_nomilk = [ 0.46, 0.11, 1.03, 0.03, 0.09, 0, 0.44, 0.04, 0];

var sequestrations = BC_milk;

var sampleRate = 8;
var max = parseInt( (sequestrations.length -1) * sampleRate );
 
console.log(max+"is max");
 
 

var el=0.7;
var energyLevel = 1;
var go=0;
//var max=1;
var dotX = 10;
var dotY = 10;
var fw =0;// this is up or down on the y axis (forward direction

var loops = 0;

var sequestration=0;
var	init = 1;
var Tsequestration=0; // total sequestration
var chainPosition = 0;
	 
 
var rescaledUnit = 0.02;
figureCanvas = document.getElementById('canvas');
centerp = figureCanvas.width / 2;
var amplifier= 0.51;//centerp /2;

//var lastX = 0;
var lastX = centerp;// amplifier + rescaledUnit+0 ;
var lastY= lastX;

var idealLastX = centerp;//0.1 * rescaledUnit;
var idealLastY = idealLastX;
var iterations=0;
 





         var figureCanvas = document.getElementById('canvas');

         if (figureCanvas.getContext)
                 {
                 var ctx5 = figureCanvas.getContext('2d');
                 var X = figureCanvas.width-(figureCanvas.width / 2);
                 var Y = figureCanvas.height-(figureCanvas.height / 2);

                        // var idealX = X+(ix*X) * .3;
                        // var idealY = Y+(iy*Y) * .3;

//ctx5.drawImage(Timg, tx, ty, 10, 10);
                         ctx5.strokeStyle = "#cccccc";// = "rgba(5, 103, 233, 0.9)";
                         ctx5.lineWidth=2;
                      
                     
                    
                   
                        var radius = X*0.3;
                        ctx5.beginPath();
                        ctx5.arc(X, Y, radius, 0, 2 * Math.PI, false);
                        //ctx5.fillStyle = none;
                        //ctx5.fill();
                        ctx5.lineWidth = 4;
                        ctx5.strokeStyle = '#cccccc';
                        ctx5.stroke();
                        //ctx5.endPath();
			ctx5.moveTo(X,Y);
			//ctx5.beginPath();
                        ctx5.lineTo(X, Y-150);
                        //ctx5.fillStyle = none;
                        //ctx5.fill();
                        ctx5.lineWidth = 7;
                        ctx5.strokeStyle = '#cccccc';
                        ctx5.stroke();
			}








function clearFigure()
	{
	var figureCanvas = document.getElementById('figure');
	if (figureCanvas.getContext)
		{
		var ctx5 = figureCanvas.getContext('2d');
 
		}
	}

 
function df(ix,iy, )// textDli, textDpp, Xsequestration)
			 {

	scaleIt=1;
 
	 var figureCanvas = document.getElementById('figure');
 
	 if (figureCanvas.getContext)
		 {
		 var ctx5 = figureCanvas.getContext('2d');
		 var X = figureCanvas.width-(figureCanvas.width / 2);
		 var Y = figureCanvas.height-(figureCanvas.height / 2);
		 var R = 45;
			 /*
		 if(iy < 0.09   )
			 {
			 fw=3;
			 }
		 if(iy <-0.09   )
			 {
			 fw=0;
			 }
		 if(fw==0)
			 {
			 ctx5.fillStyle = "rgba(233, 103, 5, 0.9)"; //#E96705
			 document.getElementById("dir").value =fw;
			 }
		 else
			 {
			 ctx5.fillStyle = "rgba(5, 103, 233, 0.9)"; //#E96705
			 document.getElementById("dir").value =fw;
			 }
			 */
			 
			 
			 var idealX = X+(ix*X) * .3;
			 var idealY = Y+(iy*Y) * .3;
			 
			 if (init == 1){
			 Tsequestration = sequestrations[0];
			 var idealX = X+(ix*X) * .3;
			 var idealY = Y+(iy*Y) * .3;
			 //var lastX = X+(ix*X) * .3;
			 //var lastY = X+(ix*X) * .3;
			 //alert();
			 init = 2;
			 idealLastX = idealX;
			 idealLastY = idealY;
			 chainPosition = 0;
					}
					
					
					
			 var textD=ix+iy;
			 //var tx=X+(ix*X)*sequestration;
			 //var ty=Y+(iy*Y)*sequestration;

			 //amplifier + rescaledUnit
			 sequestration =   sequestrations[ parseInt(chainPosition) ] ;
			 
			 var tx=X+(ix*X)*4* (Tsequestration * rescaledUnit) + (sequestration * rescaledUnit) * amplifier;//scaleIt;
			 var ty=Y+(iy*Y)*4* (Tsequestration * rescaledUnit) + (sequestration * rescaledUnit) * amplifier;
			 
			 var tx=(idealLastX-X) + ( X+(ix*X * ((Tsequestration * rescaledUnit) + (sequestration * rescaledUnit) * amplifier ))) ;//scaleIt;
			 var ty=(idealLastY-Y) + ( Y+(iy*Y * ((Tsequestration * rescaledUnit) + (sequestration * rescaledUnit) * amplifier))) ;
 
                         var txt_x=(idealLastX-X) + ( X+(ix*X* ((Tsequestration * rescaledUnit) + (sequestration * rescaledUnit) * amplifier  *2.7))) ;//scaleIt;
                         var txt_y=(idealLastY-Y) + ( Y+(iy*Y* ((Tsequestration * rescaledUnit) + (sequestration * rescaledUnit) * amplifier  *2.7))) ;


//alert(textDli + ":" + chainPosition + ":" +Tsequestration + "___" + tx + ":" + ty);
			 
			 if (init == 299 )
			 {

			 var initSeq = sequestrations[ parseInt(0) ];
			 var tx= ( X+(ix*X)* 1 * (initSeq * rescaledUnit) * amplifier ) ;//scaleIt;
			 var ty= ( Y+(iy*Y)* 1 * (initSeq * rescaledUnit) * amplifier) ;
		//	alert(tx + ":"+ ty);
			 lastX = tx;
			 lastY = tx;
			 init = 3;
			 }

                         //document.getElementById("sequestration").value = Tsequestration; 
			 ctx5.fillStyle = "rgba(0, 0, 0, 1)";
			 ctx5.font = "20px Palatino";
			 var sgn = "+";
			 if (sequestrations[ parseInt(chainPosition) ] < 0)
				       {
				       sgn="-";
				       //document.getElementById("seq").innerHTML=sgn;
				       }
			 //document.getElementById("seq").innerHTML=sgn;
			 //document.getElementById("events").innerHTML=sequestration;
			 var seqAbs = Math.abs(sequestrations[ parseInt(chainPosition) ]);
			 //document.getElementById("events").innerHTML=seqAbs;

	 
			 
		/*	console.log("sequestrations[ parseInt(chainPosition) ] "+sequestrations[ parseInt(chainPosition) ] );
			 ctx5.lineWidth=5;
			 ctx5.strokeStyle = "#FF0000";// = "rgba(5, 103, 233, 0.9)";
			 ctx5.beginPath();
			 ctx5.moveTo(idealLastX,idealLastY);
			 ctx5.lineTo(idealX,idealY);
			 ctx5.stroke();
*/

		         //ctx5.drawImage(Timg, tx, ty, 10, 10);
			 ctx5.strokeStyle = "#white";// = "rgba(5, 103, 233, 0.9)";
			 ctx5.lineWidth=2;
			 ctx5.beginPath();
			 ctx5.moveTo(lastX,lastY);
			 ctx5.lineTo(tx,ty);
			 ctx5.stroke();
			var radius = 15;
			ctx5.beginPath();
			ctx5.arc(tx, ty, radius, 0, 2 * Math.PI, false);
			ctx5.fillStyle = 'orange';
			ctx5.fill();
			ctx5.lineWidth = 1;
			ctx5.strokeStyle = '#003300';
			ctx5.stroke();
			ctx5.fillStyle = 'green';
			ctx5.fillText (  sgn + "" + seqAbs ,txt_x,txt_y);

			 //ctx5.fillRect(X+(ix*X)*energyLevel, Y+(iy*Y)*energyLevel, dotX,dotY);//(ix,iy);
		 //document.getElementById("check").value =iy;
		 if (energyLevel>0.3){go=0;}
		 if (go)
			 {el=el*1}
		 else
			 {el=el*1}
		 var energyLevel = el;
		 //max=99; // links
		 //max=document.getElementById("max").value;
		 //document.getElementById(chainLinksx").value  = parseInt(sequestrations.length;
		 }
		 
		 lastX = tx; lastY = ty;
	idealLastX = idealX; idealLastY = idealY;
	Tsequestration = Tsequestration + sequestration;
	chainPosition = chainPosition + 1;
							
	 }







/* CORDIC_from_wikipedia_via_JSweet*/
var MathFunctions = (function () {
    function MathFunctions() {
    }
    MathFunctions.angles_$LI$ = function () { if (MathFunctions.angles == null)
        MathFunctions.angles = [0.78539816339745, 0.46364760900081, 0.24497866312686, 0.12435499454676, 0.06241880999596, 0.03123983343027, 0.01562372862048, 0.0078123410601, 0.00390623013197, 0.00195312251648, 9.7656218956E-4, 4.8828121119E-4, 2.4414062015E-4, 1.2207031189E-4, 6.103515617E-5, 3.051757812E-5, 1.525878906E-5, 7.62939453E-6, 3.81469727E-6, 1.90734863E-6, 9.5367432E-7, 4.7683716E-7, 2.3841858E-7, 1.1920929E-7, 5.960464E-8, 2.980232E-8, 1.490116E-8, 7.45058E-9]; return MathFunctions.angles; };
    ;
    MathFunctions.Kvalues_$LI$ = function () { if (MathFunctions.Kvalues == null)
        MathFunctions.Kvalues = [0.70710678118655, 0.63245553203368, 0.6135719910779, 0.60883391251775, 0.60764825625617, 0.6073517701413, 0.60727764409353, 0.60725911229889, 0.60725447933256, 0.60725332108988, 0.60725303152913, 0.60725295913894, 0.6072529410414, 0.60725293651701, 0.60725293538591, 0.60725293510314, 0.60725293503245, 0.60725293501477, 0.60725293501035, 0.60725293500925, 0.60725293500897, 0.6072529350089, 0.60725293500889, 0.60725293500888]; return MathFunctions.Kvalues; };
    ;
    MathFunctions.cordic = function (theta, n) {
        var v;
        if (theta < -Math.PI / 2 || theta > Math.PI / 2) {
            v = (theta < 0) ? MathFunctions.cordic(theta + Math.PI, n) : MathFunctions.cordic(theta - Math.PI, n);
            return [-v[0], -v[1]];
        }
        v = [1.0, 0];
        var angle = MathFunctions.angles_$LI$()[0];
        var Kn = MathFunctions.Kvalues_$LI$()[Math.min(n, MathFunctions.Kvalues_$LI$().length - 1)];
        var sigma;
        var factor;
        var poweroftwo = 1;
        for (var i = 0; i < n; i++) {
            sigma = (theta < 0) ? -1 : 1;
            factor = sigma * poweroftwo;
            v = [v[0] - v[1] * factor, v[0] * factor + v[1]];
            theta -= sigma * angle;
            poweroftwo /= 2;
            angle = (i + 2 > MathFunctions.angles_$LI$().length) ? angle / 2 : MathFunctions.angles_$LI$()[i + 1];
        }
        ;
        return [v[0] * Kn, v[1] * Kn];
    };
    MathFunctions.main = function (args) {
        {
            var values;
            values = MathFunctions.cordic(Math.PI, 8);
            //values = MathFunctions.cordic(Math.PI / 2, 8);
            //values = MathFunctions.cordic(0, 15);

}
        ;
    };
    return MathFunctions;
}());



MathFunctions["__class"] = "MathFunctions";
MathFunctions.Kvalues_$LI$();
MathFunctions.angles_$LI$();


// make our own pi.
var step=0;
var sign=1;
var i=1;
var total=0;
for (i=0;i<9999;i++)
	{
	i++;
	step = 1/i;
	if (sign==1)
			{
			total = total + step;
			psign="+";
			}
	else
			{
			total = total - step;
			psign="-";
			}
			sign= sign * -1;
	stotal = total;
	}
//var pi = 4 * (1-1/3+1/5-1/7+1/9-1/11+1/13-1/15+1/17-1/21+1/23-1/25+1/27-1/29+1/31-1/33);
pi=stotal*4;

var pp=((pi/max*-2)+pi*2);
var li=1;


function theframe ()
	{
	n=max ;  
	//var chainLinks = 10;
	pp=pi/max;
	var vv=MathFunctions.cordic((li*pp)*1,n);
	clearFigure();
	 
	el=el*sequestration;
        if(iterations == 1)
                {
                df(vv[1]*-1,vv[0]*-1, li,max, el);
                //iterations=0;
                }
	if(iterations == sampleRate * 2)
		{
		//df(vv[1],vv[0], li,max, el);
		iterations=0;
		}
	iterations++;
	li=li+1;
	if (li>max*2)
		{
		li=0;loops++;
		 
		}
	}











// 20220519WA jesse







//False:
// BC_nomilk [0.11, 1.03, 0.03, 0.09, 0, 0.44, 0.04, 0]

//True:
//BC_nomilk = [ 0.46, 0.11, 1.03, 0.03, 0.09, 0, 0.44, 0.04, 0];





//False:
// BC_milk   [0.21, 1.03, 0.03, 0.09, 0, 0.44, 0.04, 0] 

//True:
BC_milk = [6.62, 0.21, 1.03, 0.03, 0.09, 0, 0.44, 0.04, 0];

var rez=3;
var rrez=1.1;


/*
drawScale =0.52;
TP_drawScale = 0.88;
chainPosition = 0;
chainLength = parseInt( sequestrations.length -1) ;
oldX = null;
oldY = null;
var rescaledUnit = 0.15;
var Tsequestration = 1;

var sequestrations = BC_milk;

*/

drawScale= 1.6;
TP_drawScale = 0.67;
chainPosition = 0;
chainLength = parseInt( sequestrations.length -1) ;
oldX = null;
oldY = null;
var rescaledUnit = 0.08033;
var Tsequestration = 1.9;

var sequestrations = BC_nomilk;




function c(li)
{
	var figureCanvas = document.getElementById('figure');
	if (figureCanvas.getContext)
	{

	chainPosition=li;
	sequestration = sequestrations[ parseInt(chainPosition) ] ;
	Tsequestration = 1;//Tsequestration + sequestration;

//drawScale = drawScale + (Tsequestration * rescaledUnit);

	var vv=MathFunctions.cordic(  ( (pi/chainLength*2) * li )+(pi/4)*2, 20);
	var ctx5 = figureCanvas.getContext('2d');
	var X = figureCanvas.width/4 *0.8; 
	var Y = figureCanvas.height/4; 
	ctx5.strokeStyle = "#cccccc"; 
	ctx5.lineWidth=2*rez;
	var radius = X*0.3;
	ctx5.beginPath();

//console.log(Tsequestration)

	X = ( (figureCanvas.width/2*vv[0]*1) * (drawScale * (Tsequestration * rescaledUnit)) )+ figureCanvas.width/2 ;
	Y = ( (figureCanvas.width/2*vv[1]*-1) * (drawScale * (Tsequestration * rescaledUnit)) )+ figureCanvas.width/2 ;


//	X = ( (figureCanvas.width/2*vv[0]*1) * (drawScale * (Tsequestration * rescaledUnit)) )+ figureCanvas.width/2 ;
//	Y = ( (figureCanvas.height/2*vv[1]*-1) * drawScale ) + figureCanvas.height/2;

	ctx5.moveTo(X,Y);

//(Tsequestration * rescaledUnit)

	var radius = 15*(rez/2);
	ctx5.lineWidth = 2*rez;
	ctx5.beginPath();
	ctx5.arc(X, Y, radius*rrez, 0, 2 * Math.PI, false);
	ctx5.fillStyle = 'orange';
	ctx5.fill();
	ctx5.strokeStyle = '#000000';
	ctx5.stroke();


	//oldCO2 = oldCO2 + CO2;

	
	if (oldX == null){oldX=X; }
	if (oldY == null){oldY=Y; }

	//console.log(oldX+"//"+oldY);

	ctx5.strokeStyle = "#000000";// = "rgba(5, 103, 233, 0.9)";
	ctx5.lineWidth=2*rez;
	ctx5.beginPath();
	ctx5.moveTo(X,Y);

	//ctx5.moveTo(lastX,lastY);
	ctx5.lineTo(oldX, oldY);
	ctx5.stroke();

	oldX = X;
	oldY = Y;

	ctx5.fillStyle = "rgba(0, 0, 0, 1)";
	ctx5.font = "50px Palatino";
	ctx5.textAlign = 'center';
	var sgn = "+";


	// text_position 
	var TP = MathFunctions.cordic(  ( (pi/chainLength*2) * li )+(pi/4)*2, 20);

	//TP_drawScale = 0.4 +TP_drawScale * (rescaledUnit * ( sequestrations[ parseInt(chainPosition) ] ) );
	//TP[1] = 1+ TP[1] * (rescaledUnit * ( sequestrations[ parseInt(chainPosition) ] ) );

	var txt_x = ( (figureCanvas.width/2 * (TP[0]) )* TP_drawScale  )+ figureCanvas.width/2 ;
	var txt_y = ( (figureCanvas.height/2* TP[1]*-1) * TP_drawScale ) + figureCanvas.height/2;

	
	if (sequestrations[ parseInt(chainPosition) ] < 0)
	{
	sgn="-";
	}

	var seqAbs = Math.abs(sequestrations[ parseInt(chainPosition) ]);

	ctx5.fillStyle = 'black';
	ctx5.fillText (  sgn + "" + seqAbs , txt_x, txt_y);


	}
}



function circularity_diagram(ix,iy,iz)
	{
	var x=ix;
	var y=iy;
	var z=iz;
	
	
console.log( x,y,z);
	 sequestration=0;
	//var	init = 1;
	 Tsequestration=10; // total sequestration
	 chainPosition = 0;
	if(!x){x=0;}
	if(!y){y=0;}
	if(!z){z=0;}
	
	for (i=0;i<sequestrations.length;i++)
		{
		c2(i,x,y,z);
		}
	}






				   // 202205201110WA_read_cvN_draw_circularity.txt
				   // 202205201110WA read cvN and draw it as circularity

				   function c2(li,x,y,z)
				   {
					   var figureCanvas = document.getElementById('canvas');
					   if (figureCanvas.getContext)
					   {
					   chainLength = parseInt( sequestrations.length -1) ;
					   chainPosition=li;
					   sequestration = sequestrations[ parseInt(chainPosition) ] ;
					  Tsequestration = Tsequestration + sequestration;

				   //drawScale = drawScale + (Tsequestration * rescaledUnit);

					   var vv=MathFunctions.cordic(  ( (pi/chainLength*2) * li )+(pi/chainLength)*2, 20);
					   var ctx5 = figureCanvas.getContext('2d');
					   var X = figureCanvas.width/4 *0.8;
					   var Y = figureCanvas.height/4;
					   ctx5.strokeStyle = "#cccccc";
					   ctx5.lineWidth=2*rez;
					   var radius = X*0.3;
					   ctx5.beginPath();

	//			   console.log(Tsequestration)

					   X = x;//( (figureCanvas.width/2*vv[0]*1) * (drawScale * (Tsequestration * rescaledUnit)) )+ figureCanvas.width/2 ;
					   Y = y;//( (figureCanvas.width/2*vv[1]*-1) * (drawScale * (Tsequestration * rescaledUnit)) )+ figureCanvas.width/2 ;
					   X = ( ( figureCanvas.width/2 *vv[0]*1) * (drawScale * (Tsequestration * rescaledUnit)) )+ x ;
					   Y = ( ( figureCanvas.width/2 *vv[1]*-1) * (drawScale * (Tsequestration * rescaledUnit)) )+ y ;
				   //	X = ( (figureCanvas.width/2*vv[0]*1) * (drawScale * (Tsequestration * rescaledUnit)) )+ figureCanvas.width/2 ;
				   //	Y = ( (figureCanvas.height/2*vv[1]*-1) * drawScale ) + figureCanvas.height/2;

					   ctx5.moveTo(X,Y);

				   //(Tsequestration * rescaledUnit)

					   var radius = 15*(rez/2);
					   ctx5.lineWidth = 2*rez;
					   ctx5.beginPath();
					   ctx5.arc(X, Y, radius*rrez, 0, 2 * Math.PI, false);
					   ctx5.fillStyle = 'orange';
					   ctx5.fill();
					   ctx5.strokeStyle = '#white';
					   ctx5.stroke();


					   //oldCO2 = oldCO2 + CO2;

					   
					   if (oldX == null){oldX=X; }
					   if (oldY == null){oldY=Y; }

			//		   console.log(oldX+"//"+oldY);

					   ctx5.strokeStyle = "#white";// = "rgba(5, 103, 233, 0.9)";
					   ctx5.lineWidth=2*rez;
					   ctx5.beginPath();
					   ctx5.moveTo(X,Y);

					   //ctx5.moveTo(lastX,lastY);
					   ctx5.lineTo(oldX, oldY);
					   ctx5.stroke();

					   oldX = X;
					   oldY = Y;

					   ctx5.fillStyle = "rgba(0, 0, 0, 1)";
					   ctx5.font = "50px Palatino";
					   ctx5.textAlign = 'center';
					   var sgn = "+";


					   // text_position
					   var TP = MathFunctions.cordic(  ( (pi/chainLength*2) * li )+(pi/chainLength)*2, 20);

					   //TP_drawScale = 0.4 +TP_drawScale * (rescaledUnit * ( sequestrations[ parseInt(chainPosition) ] ) );
					   //TP[1] = 1+ TP[1] * (rescaledUnit * ( sequestrations[ parseInt(chainPosition) ] ) );

					   var txt_x = ( (figureCanvas.width/2 * (TP[0]) )* TP_drawScale  )+ figureCanvas.width/2 ;
					   var txt_y = ( (figureCanvas.height/2* TP[1]*-1) * TP_drawScale ) + figureCanvas.height/2;

					   
					   if (sequestrations[ parseInt(chainPosition) ] < 0)
					   {
					   sgn="-";
					   }

					   var seqAbs = Math.abs(sequestrations[ parseInt(chainPosition) ]);

					   ctx5.fillStyle = 'white';
					   ctx5.fillText (  sgn + "" + seqAbs , txt_x, txt_y);


					   }
				   }


//sequestrations= theGraph.links[0].cvn[0][1] ;

drawScale = 0.25/Math.max.apply(null, sequestrations ) ;

 
