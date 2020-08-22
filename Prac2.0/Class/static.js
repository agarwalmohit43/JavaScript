class User {
  static staticMethod() {
    console.log(this === User)
  }
}
User.staticMethod()

class Article {
  static name = 'Article Class'

  constructor(title, date) {
    this.title = title
    this.date = date
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date
  }

  static createToday() {
    return new this('Today Article', new Date())
  }
}

let articles = [
  new Article('HTML&CSS', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
  Article.createToday(),
]

console.log(Article.name)

console.log(articles)
articles.sort(Article.compare)
console.log(articles)
