import { model } from './model'
import { title, plan_title, plan_id, plans, button } from './templates'

const $site = document.querySelector('#site');

model.forEach(block => {
  let html = '';
  if (block.type === 'title') {
    html = title(block)
  }
  else if (block.type === 'plan_title') {
    html = plan_title(block)
  }
  else if (block.type === 'plan_id') {
    html = plan_id(block)
  }
  else if (block.type === 'plans') {
    html = plans(block)
  }
  else if (block.type === 'button') {
    html = button(block)
  }
  $site.insertAdjacentHTML('beforeend', html)
});




