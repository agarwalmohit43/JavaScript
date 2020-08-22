function createTable(event) {
  event.preventDefault()
  let rows = Number(document.getElementById('rows').value)
  let column = Number(document.getElementById('column').value)

  if (isNaN(rows) || isNaN(column)) {
    alert('Enter only Numbers')
    return
  }
  let table = document.getElementById('dynamicTable')
  let innerHTMLData = ''
  for (let i = 0; i < rows; i++) {
    let openingTr = '<tr>'
    let tdTag = '<td></td>'.repeat(column)
    let closingTr = '</tr>'
    innerHTMLData += openingTr + tdTag + closingTr
  }

  table.innerHTML = innerHTMLData
}
