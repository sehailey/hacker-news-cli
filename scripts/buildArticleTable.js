const buildTable = articles =>
  articles
    .map(
      article =>
        `<tr><td><a href="${article.link}">${article.title}</a></td><td>${
          article.content
        }</td></tr>`
    )
    .join()

module.exports = buildTable
