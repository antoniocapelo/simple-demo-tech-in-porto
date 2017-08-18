import $ from 'jquery';
import faker from 'faker';
import buildItem from './buildItem';

let items = [
    buildItem(),
    buildItem(),
    buildItem(),
    buildItem(),
];

const mountPoint = $('#oldschool')

const updateItems = () => {
    items.forEach((item) => {
        item.updatedAt = Number(new Date());
        item.ready = faker.random.boolean();

        updateItem(item);
    })
}

const updateItem = (item) => {
    // find the item we want to update
    const itemEl = mountPoint.find(`#${item.id}`);

    // Rebuild classes
    const cls = ['list-item'];

    if (item.ready) {
        cls.push('ready')
    }

    itemEl.attr('class', cls.join(' '));

    // update the DOM with new values
    itemEl.find('.updated').text(item.updatedAt);
}

const remove = (item) => {
    const idxToRemove = items.findIndex((el) => el.id === item.id);

    // update the model
    items = items.filter((currItem) => item.id === currItem)

    // update the view
    mountPoint.find(`#${item.id}`).remove();
}


const renderItem = (item) => {
    const cls = ['list-item'];

    if (item.ready) {
        cls.push('ready')
    }

    // build the LI
    const li = $(`<li id="${item.id}" class="${cls.join(' ')}"></li>)`)

    // prepare the content
    const content = $(`<span>name: <span class="name">${item.name}</span <br /> updatedAt: <span class="updated">${item.updatedAt}</span></span>`);
     
    // add button
    const btn = $(`<button>remove</button>`);

    // setting the click handler
    btn.click(function() {
        remove(item);
    })

    li.append(content)
    li.append(btn)

    return li;
} 


const renderItems = () => {
    // find list mount point
    const ul = $(mountPoint).find('.list');

    // Render each item on the array
    ul.html(items.map(renderItem))
}

(function() {
    mountPoint.html('<div class="App"><h2>Imperative Demo</h2><ul class="list"></div>');

    // Render items
    renderItems();

    window.setInterval(updateItems, 1000);

}())
