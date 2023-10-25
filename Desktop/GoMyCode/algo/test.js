// Fonction pour compter le nombre de mots dans une phrase
function countWords(sentence) {
    const words = sentence.split(' ');
    return words.length;
  }
  
  // Fonction pour compter le nombre de voyelles dans une phrase
  function countVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (vowels.includes(sentence[i])) {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  
  // Fonction pour compter le nombre total de caractères dans une phrase
  function countCharacters(sentence) {
    return sentence.length;
  }
  
  // Votre phrase d'exemple
  const phrase = "Ceci est un exemple de phrase avec des mots et des voyelles.";
  
  const wordCount = countWords(phrase);
  const vowelCount = countVowels(phrase);
  const characterCount = countCharacters(phrase);
  
  console.log(`Nombre de mots: ${wordCount}`);
  console.log(`Nombre de voyelles: ${vowelCount}`);
  console.log(`Nombre total de caractères: ${characterCount}`);
  