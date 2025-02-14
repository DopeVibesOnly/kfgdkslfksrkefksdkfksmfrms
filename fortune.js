const fortunes = [
  "Мы как пельмени и сметана - идеальное комбо ♥",
  "Ваша искренняя улыбка сегодня растопит чье-то сердце ✿",
  "Предсказываю, что ты - причина, по которой сегодня солнце светит ярче ♥",
  "Ты — причина, по которой мне хочется учить новые языки... чтобы сказать тебе «люблю» на всех ✧",
  "Предсказываю, что с тобой я забуду, что такое скука и однообразие ♡",
  "Предсказываю, что ты станешь моим любимым оправданием опозданий ✿",
  "Ты — мой персональный фильтр от плохого настроения ♥",
  "Предсказываю, что если я буду гулять с тобой, то только с солнцезащитных очках ✧",
  "Твоя харизма скоро станет такой мощной, что её придётся регистрировать как источник возобновляемой энергии ♡",
];

document.querySelector('.fortune-button').addEventListener('click', function() {
  const button = this;
  const fortuneText = document.getElementById('fortune-text');
  const crystalBall = document.querySelector('.crystal-ball');
  const fortuneContainer = document.querySelector('.fortune-container');
  
  // Disable button and add initial effects
  button.disabled = true;
  
  // Add animation classes
  crystalBall.classList.add('animate-crystal');
  fortuneText.classList.add('fortune-fade-out');
  
  // Add sparkle effect to fortune container
  fortuneContainer.style.transform = 'scale(1.02)';
  fortuneContainer.style.boxShadow = '0 15px 40px rgba(255,105,180,0.4), inset 0 0 50px rgba(255,192,203,0.4)';
  
  // Generate random fortune
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  
  // Update text and animations after delay
  setTimeout(() => {
    fortuneText.textContent = randomFortune;
    fortuneText.classList.remove('fortune-fade-out');
    fortuneText.classList.add('fortune-fade-in');
    
    // Reset animations after completion
    setTimeout(() => {
      crystalBall.classList.remove('animate-crystal');
      fortuneText.classList.remove('fortune-fade-in');
      fortuneContainer.style.transform = '';
      fortuneContainer.style.boxShadow = '';
      button.disabled = false;
    }, 1000);
  }, 1000);
});