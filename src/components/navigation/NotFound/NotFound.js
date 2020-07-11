import React from "react";
import './NotFound.css'
import { useHistory } from "react-router-dom";
import SelectInput from "@material-ui/core/Select/SelectInput";

// there was an error : Cannot read property 'getContext' of null, using canvas. I solved it, with writing code after <canvas></canvas> tag. 
export default function NotFound(){
	



    return(
		<div class="content"><canvas class="snow" id="snow"></canvas>
		{
		/* snow show. I wrote it after canvas to hinder(mane olmaq) to throw an error. (it gave a getContext error) */
(function() {
	function ready(fn) {
		if (document.readyState != 'loading'){
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}


	function makeSnow(el) {
			var ctx = el.getContext('2d');
			console.log(ctx);
			var width = 0;
			var height = 0;
			var particles = [];
			
			var Particle = function() {
				this.x = this.y = this.dx = this.dy = 0;
				this.reset();
			}
			
			Particle.prototype.reset = function() {
				this.y = Math.random() * height;
				this.x = Math.random() * width;
				this.dx = (Math.random() * 1) - 0.5;
				this.dy = (Math.random() * 0.5) + 0.5;
			}
			
			function createParticles(count) {
				if (count != particles.length) {
					particles = [];
					for (var i = 0; i < count; i++) {
					particles.push(new Particle());
				}
			}
		}
		
		function onResize() {
			width = window.innerWidth;
			height = window.innerHeight;
			el.width = width;
			el.height = height;
			
			createParticles((width * height) / 10000);
		}
		
		function updateParticles() {
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = '#f6f9fa';
			
			particles.forEach(function(particle) {
				particle.y += particle.dy;
				particle.x += particle.dx;
				
				if (particle.y > height) {
					particle.y = 0;
				}
				
				if (particle.x > width) {
					particle.reset();
					particle.y = 0;
				}
				
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
				ctx.fill();
			});
			
			window.requestAnimationFrame(updateParticles);
		}
		
		onResize();
		updateParticles();
		
		window.addEventListener('resize', onResize);
	}
	
	ready(function() {
		var canvas = document.getElementById('snow');
		makeSnow(canvas);
	});
})()
	}
	{/* End of the function */}
	
        <h1 className="main-text">Where are you going?</h1>
    <div class="ground">
        <div class="mound">
            <div class="mound_text">404</div>
            <div class="mound_spade"></div>
        </div>
    </div>
</div>
    );
}
