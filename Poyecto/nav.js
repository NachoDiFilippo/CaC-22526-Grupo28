function showMenu() {
    var menuElement = document.getElementById('menu');
    if (menuElement.getAttribute('id') === 'menu' && menuElement.classList.length === 0){
      menuElement.classList.add('reponsive');
    } else {
      menuElement.classList.remove('reponsive');
    }

  }
  
  
  
  
  
  