<template>
<div>
<p>  {{ this.$store.state.current_number_planet }}</p>

  <div ref="canvas"></div>
      </div>

</template>
<script>
  export default {
    name: "DesignPlanet",
    data  () {
      return {
        script: null,
        ps: null,
        canvas: null,
      }
    },

    mounted () {

      this.script = p => {


        function CreatePlanete()
        {


          p.fill (p.random(0, 255), p.random(0, 255), p.random(0, 255));
          p.translate(0,0, 0);
          p.push()
          p.rotateZ(p.frameCount * 0.01);
          p.rotateX(p.frameCount * 0.01);
          p.rotateY(p.frameCount * 0.01);
          p.sphere( p.random(30,190) );
          p.pop();
         // var planete_size =  p.random(80, 350)
         // p.fill (p.random(0, 255), p.random(0, 255), p.random(0, 255));
         // p.ellipse (p.width/2, p.height/2, planete_size, planete_size);
        }


        function CreateStar(len)
        {

          if (len == 0)
            return;
          p.fill (250, 250, 250);
          p.ellipse (p.random (-400, 400), p.random (-400, 400), 10, 10);
          CreateStar(--len)
        }


        this.x = 100
        this.y = 100

        p.setup = _ => {
          this.canvas = p.createCanvas(400, 400, p.WEBGL)
          this.canvas.parent(this.$refs.canvas)
          p.background(0)
          CreateStar(80)
          CreatePlanete()
          p.frameRate(60)
        }

      }
      const P5 = require('p5')
      this.ps = new P5(this.script)
    }
  }
</script>
