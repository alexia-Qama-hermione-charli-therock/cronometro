class Stopwatch{
    constructor(id, delay=100){
      this.state= "paused";
      this.delay= delay;
      this.display= document.getElementById(id);
      this.value=0;
    }

    formatTime(ms){
      let hours=Math.floor(ms/3600000 );
      let minutes=Math.floor((ms-(hours*ms/3600000))/60000);
      let seconds=Math.floor((ms-(hours*3600000)-(minutes*60000))/1000);
      let ds=Math.floor((ms-(hours*3600000)-(minutes*60000)-(seconds*1000))/100);

      if(hours<10){
        hours= "0"+hours;
      }

      if(minutes<10){
        minutes= "0"+minutes;
      }

      if(seconds<10){
        seconds= "0"+seconds;
      }

      return hours+":"+ minutes+ ":"+ seconds + "."+ ds;
    }

    update(){
        if(this.state== "running"){
            this.value += this.delay
        }

        this.display.innerHTML= this.formatTime(this.value)
    }

    start(){
        if(this.state== "paused"){
            this.state= "running";
            if(!this.interval){
                let t = this;
                this.interval= setInterval(function(){t.update();},this.delay)
            }
        }
    }

    stop(){
        if(this.state== "running"){
            this.state= "paused";

            if(this.interval){
                clearInterval(this.interval)
                this.interval=null
            }
        }
    }

    reset(){
        this.stop();
        this.value=0;
        this.update()
    }

}

stopwatch= new Stopwatch("stopwatch")