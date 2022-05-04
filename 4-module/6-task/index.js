function outputList() {
  for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
    title = title.trim();

    let count = li.querySelectorAll('li').length

    alert(`${title} : ${count}`)
  }
}