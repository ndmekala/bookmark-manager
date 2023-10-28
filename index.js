import inquirer from 'inquirer';

const data = [
  {
    categoryName: 'category',
    subcategories: [
      {
        subcategoryName: 'subcategory',
        links: [
          { 
            name: 'name',
            url: 'url'
          }
        ]
      },
      {
        subcategoryName: 'subcategoryTwo',
        links: [
          { 
            name: 'name',
            url: 'url'
          },
          { 
            name: 'second name',
            url: 'url2'
          },
        ]
      }
    ]
  }
]

const getIndex = (data, categoryName) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].categoryName === categoryName) {
      return i
    }
  }
}

// need a fn to get the index from just the name
inquirer.prompt([
  {
    type: 'list',
    name: 'category',
    message: 'Which category would you like to select?',
    choices: data.map((category) => category.categoryName),
  }
]).then((answers) => {
  console.log()
  inquirer.prompt([
    {
      type: 'list',
      name: 'subcategory',
      message: 'Which subcategory would you like to select?',
      choices: data[getIndex(data, answers.category)].subcategories.map((subcategory) => subcategory.subcategoryName),
    }
  ]).then((ans) => {
    inquirer.prompt([
      // some prompts about url + name
      // finally write!
    ])
  })
})
