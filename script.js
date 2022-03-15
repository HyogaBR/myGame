let canvas = document.getElementById( "canvas" );
let ctx = canvas.getContext( "2d" );

let px = 0;
let py = 0;
let dx = 1;
let dy = 0;

let animar;

l_ret = a_ret = 50;

l_canvas = a_canvas = 500;


function desenhar() {

		ctx.clearRect( 0, 0, l_canvas, a_canvas );


		ctx.fillStyle = "#f00";
		ctx.lineWidth = 3;
		ctx.strokeStyle = "#000";


		ctx.fillRect( px, py, l_ret, a_ret );
		ctx.strokeRect( px, py, l_ret, a_ret );


		px += dx;

		py += dy;


		if( ( px <= 0 ) && ( py <= 0 ) ) {

				dx = 1;
				dy = 0;

		}

		if( ( px + l_ret >= l_canvas) && ( py <= 0 ) ) {

				dx = 0;
				dy = 1;

		}

		if( ( px + l_ret >= l_canvas ) && ( py + a_ret >= a_canvas ) ) {

				dx = -1;
				dy = 0;

		}

		if( ( px <= 0 ) && ( py + a_ret >= a_canvas ) ) {

				dx = 0;
				dy = -1;

		}


		animar = requestAnimationFrame( desenhar );

}

desenhar();
