const classesListElement = document.getElementById('classes-list');

// Fonction pour afficher la liste des classes
function displayClassesList(classesList) {
  classesList.forEach(city => {
    const cityHeader = document.createElement('h2');
    cityHeader.textContent = city.day;
    classesListElement.appendChild(cityHeader);
    
    city.classes.forEach(classItem => {
      if (classItem.time === 'Location') {
        const listItem = document.createElement('li');
        const locationLink = document.createElement('a');
        locationLink.textContent = classItem.name;
        locationLink.href = classItem.locationURL;
        locationLink.target = '_blank';
        listItem.appendChild(locationLink);
        classesListElement.appendChild(listItem);
      }
    });
  });
}

// Appel de la fonction pour afficher la liste des classes au chargement de la page
displayClassesList(ClassesList);
