const homes = document.querySelector('.home')
const universos = document.querySelector('.universo')
const exploracaos = document.querySelector('.exploracao')

export function home () {
  universos.classList.remove('ativo')
  exploracaos.classList.remove('ativo')
  homes.classList.add('ativo')
}

export function exploracao () {
  universos.classList.remove('ativo')
  exploracaos.classList.add('ativo')
  homes.classList.remove('ativo')
}

export function universo () {
  universos.classList.add('ativo')
  exploracaos.classList.remove('ativo')
  homes.classList.remove('ativo')
}