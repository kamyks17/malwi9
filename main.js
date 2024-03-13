document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('textContainer');
    const button = document.getElementById('animationButton');
    const audio = document.querySelector('audio');
    const img = document.querySelector('img');
    const texts = ['Cześć M :)', 'Dziś jest Twoje święto...', 'Więc mam dla Ciebie kilka słów', 'W nietypowej formie jak już zauważyłaś','Mam nadzieję, że Ci się podoba ;)',
      'Chciałbym Ci życzyć', 'Dużo uśmiechu', '... abyś zarażała nim i swoją energią najbliższych', 'Spełnienia marzeń', '... dąż do ich realizacji, nawet tych najskrytszych i "niemożliwych"', 'Wspaniałych chwil', '... aby były niezapomniane', 'Dużo sukcesów', '... osobistych i zawodowych', 'Jak najmniej problemów', '... a gdyby jakiś się pojawił','... wyceluj i przebij go na drugą stronę z całej siły🏐', 'Uroków małych rzeczy, których codziennie doświadczasz', '... aby to dorosłe życie nie było takie złe i nudne ;)','Niech ten nowy rozdział Twojego życia','Przyniesie Ci głębokie zrozumienie', 'Samej siebie i świata wokół Ciebie', 'Wiesz...','Największe odkrycia dokonujemy wtedy', 'Gdy odważymy się przekroczyć swoją granicę komfortu', 'I zamierzamy ruszyć na nieznane wody', 'I na koniec:', 'Radości w każdej sekundzie,', 'Uśmiechu w każdej minucie,', 'Pogody ducha w każdej godzinie,', 'Szczęścia przez całe życie', 'Życzy K'];
    let currentIndex = 0;
    let animationInterval;

    function changeText() {
      textContainer.classList.remove('show');
      setTimeout(() => {
        textContainer.textContent = texts[currentIndex];
        textContainer.classList.add('show');
        currentIndex = (currentIndex + 1) % texts.length;
    
        if (currentIndex === 0) {
          clearInterval(animationInterval);
          button.style.display = 'none';
    

          setTimeout(() => {
            textContainer.classList.remove('show');
          }, 7000);
        }
      }, 4000);
    }
      
    function startAnimation() {
      button.style.display = 'none';
      img.style.display = 'none';
      audio.play();
      changeText();
      animationInterval = setInterval(changeText, 13000);
    }

    window.startAnimation = startAnimation;
  });