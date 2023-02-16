export function title(block){
  const html = block.value.map(item => `<div class="col-sm"><h1>${item}</h1></div>`)
  return `<div class="row">
  ${html.join('')}
  </div>`
}
export function plan_title(block){
  const html = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`)
  return `<div class="row">
  ${html.join('')}
  </div>`
}
export function plan_id (block){
  const html = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`)
  return `<div class="row">
  ${html.join('')}
  </div>`
}
export function plans (block){
  const html = block.value.map(item => `<div class="col-sm"><a>${item}</a></div>`)
  return `<div class="row">
  ${html.join('')}
  </div>`
}
export function button(block){
  const html = block.value.map(item => `<div class="col-sm"><button>${item}</button></div>`)
  return `<div class="row">
  ${html.join('')}
  </div>`
}