const categoriesList = document.querySelector('#categories');

    const categoriesItems = categoriesList.querySelectorAll('.item');
    console.log(`У списку ${categoriesItems.length} категорії.`);

    categoriesItems.forEach(category => {
      const categoryTitle = category.querySelector('h2').textContent;
      const categoryElements = category.querySelectorAll('ul li').length;
      console.log(`Категорія: ${categoryTitle}`);
      console.log(`Кількість елементів: ${categoryElements}`);
    });