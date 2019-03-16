document.getElementById('pbtn').addEventListener('click',
function() {
  document.querySelector('.bkg-popup').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
  function() {
      document.querySelector('.bkg-popup').style.display = 'none';
  });