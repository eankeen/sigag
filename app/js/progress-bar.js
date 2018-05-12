//Create a progress bar that shows the timer that counts down
var bar = new ProgressBar.Circle('#countdown', {
  color: '#868e96',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 0,
  easing: 'easeInOut',
  duration: 1000,
  text: {
    autoStyleContainer: true
  },
  from: { color: /*'#adb5bd'*/'#343a40', width: 5 },
  to: { color: '#343a40', width: 5 },
  // Set default step function for all animate calls

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    //value is the value that shows when the bar is fully loaded
    var value = timer.startTime - Math.round(circle.value() * timer.startTime);
    if (value === 0) {
      circle.setText('0');
    }
    else {
      circle.setText(value);
    }
  }

});
bar.text.style.fontFamily = 'robotomedium';
bar.text.style.fontSize = '4rem';

bar.animate(1);
