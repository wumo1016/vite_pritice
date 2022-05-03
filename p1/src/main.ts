function render() {
  document.querySelector('#app').innerHTML = 'main11'
}

render()

if (import.meta.hot) {
  import.meta.hot.accept(newMoudle => {
    render()
  })
}
