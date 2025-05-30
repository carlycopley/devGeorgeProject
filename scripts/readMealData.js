fetch('../mealData.json')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); 
  })
  .then(data => {
      console.log(data);
      displayMealData(data.mealData);
  })
  .catch(error => {
      // Handle errors
      console.error('Fetch Error :-S', error);
  }); 
