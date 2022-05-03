function render() {
  document.querySelector('#app').innerHTML = 'main11'
}

render()

// 是否是热更新模式
if (import.meta.hot) {
  // 每次热更新后 都会调用这个回调
  import.meta.hot.accept(newMoudle => {
    render()
  })
}
