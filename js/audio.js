let audio;

const initAudio = function() {
  
  audio = document.getElementById("audio");
  
  const initMusic = function() {
    audio.src = 'family-mart.mp3';
    audio.load();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength);
    var barHeight;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      var x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#eee";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      var scale = 2.5;
      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = 0;
        var g = 200 * (i/bufferLength * scale) + barHeight/2;
        var b = 200 * (1 - i/bufferLength * scale) + barHeight/2;

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x * scale, HEIGHT - barHeight*2, barWidth * scale, barHeight*2);

        x += barWidth + 1;     }
    }

    renderFrame();
  };
  initMusic();
};

initAudio();

const start = function () {
  let startScreen = document.getElementById('startScreen');
  startScreen.style.display = 'none';
  let foreground = document.getElementById('foreground');
  foreground.style.display = 'block';
  let background = document.getElementById('background');
  background.style.display = 'block';
  audio.play();
};
