  var methods = ['charAt', 'reverse', 'round', 'join', 'split', 'charAt'];
  var myName = "Chuck Norris";
  var myBirthYear = 1940;
  var myImmortalityIndex = 99.99;
  var myAge = Math.round(myBirthYear*myImmortalityIndex);
  var mySecretCode = myName.charAt(0) + myAge + myName.charAt(6);
  var result = mySecretCode.split('').join().reverse('');