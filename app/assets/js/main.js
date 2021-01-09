(function () {
  let twoSideCards = document.querySelectorAll('.two-side')
  function newTwoSideCard(el) {
    let front = el.querySelector('.two-side__front')
    let back = el.querySelector('.two-side__back')

    front.onclick = function () {
      el.classList.add('active')
    }
  }
  for (let i of twoSideCards) {
    newTwoSideCard(i)
  }
})();