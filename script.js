let rooms = [
    { name: 'Прихожая', area: '6', min: '2', max: '20', id: 'hallway', deletable: false },
    { name: 'Котельная', area: '12', min: '9', max: '20', id: 'boiler-room', deletable: false },
    { name: 'Гостиная', area: '40', min: '20', max: '100', id: 'living-room', deletable: false },
    { name: 'Кухня', area: '15', min: '9', max: '50', id: 'kitchen', deletable: false },
    { name: 'Черновая кухня', area: '0', min: '6', max: '30', id: 'additional-kitchen', deletable: false },
    { name: 'Столовая', area: '20', min: '10', max: '50', id: 'dining-room', deletable: false },
    { name: 'Кладовая', area: '3', min: '1', max: '20', id: 'storeroom', deletable: false },
    { name: 'Детская', area: '30', min: '10', max: '100', id: 'childrens-room-1', deletable: false, cloneable: true },
    { name: 'Кабинет / Библиотека', area: '30', min: '10', max: '100', id: 'cabinet-1', deletable: false, cloneable: true },
    { name: 'Массажная', area: '0', min: '10', max: '20', id: 'massage-room', deletable: false },
    { name: 'Кинозал', area: '0', min: '10', max: '50', id: 'cinema-room', deletable: false },
    { name: 'Гостевая спальня', area: '20', min: '10', max: '100', id: 'guest-room-1', deletable: false, cloneable: true },
    { name: 'Гостевой туалет', area: '2', min: '2', max: '9', id: 'guest-toilet', deletable: false },
    { name: 'Гостевая гардеробная', area: '4', min: '2', max: '20', id: 'guest-dressing-room', deletable: false },
    { name: 'Сезонная гардеробная', area: '6', min: '4', max: '20', id: 'seasonal-dressing-room', deletable: false },
    { name: 'Садовая подсобка', area: '3', min: '3', max: '20', id: 'garden-utility-room', deletable: false },
    { name: 'Гараж', area: '36', min: '18', max: '60', id: 'garden-utility-room', deletable: false, cloneable: true },
    { name: 'Прачечная', area: '10', min: '4', max: '20', id: 'laundry', deletable: false },
    { name: 'Спортзал', area: '0', min: '10', max: '100', id: 'gym', deletable: false },
    { name: 'Помещение для отходов', area: '2', min: '1', max: '6', id: 'trash-room', deletable: false },
    { name: 'Мастер спальня', area: '40', min: '10', max: '100', id: 'master-bedroom-1', deletable: false, cloneable: true },
    { name: 'Спец.комната', area: '0', min: '1', max: '100', id: 'special-room-1', deletable: false, cloneable: true },
    { name: 'Бассейн', area: '0', min: '20', max: '100', id: 'pool', deletable: false },
    { name: 'Комната отдыха / медитации', area: '0', min: '10', max: '20', id: 'meditation-room', deletable: false },
    { name: 'Кухня-гостиная персонала', area: '0', min: '10', max: '50', id: 'kithen-living-room-for-staff', deletable: false },
    { name: 'Баня', area: '0', id: 'bathhouse', max: '50', min: '6', id: 'bathhouse', deletable: false }
]
const outdoorFacilities = [
    { name: 'terrace', amount: 0 },
    { name: 'grill', amount: 0 },
    { name: 'fire-pit', amount: 0 },
    { name: 'arbor', amount: 0 },
    { name: 'water', amount: 0 },
    { name: 'open-pool', amount: 0 },
    { name: 'stream/fountain', amount: 0 },
    { name: 'greenhouse', amount: 0 },
    { name: 'garden', amount: 0 },
    { name: 'vegetable-garden', amount: 0 },
    { name: 'sports-ground', amount: 0 },
    { name: 'playground', amount: 0 },
    { name: 'rock-garden', amount: 0 },
    { name: 'garage', amount: 0 },
    { name: 'seasonal-equipment-garage', amount: 0 },
    { name: 'canopy', amount: 0 },
    { name: 'car-wash', amount: 0 },
    { name: 'hozblok', amount: 0 },
    { name: 'aviary', amount: 0 },
    { name: 'other', amount: 0 },
]
let houseArea = 0
let landArea = 0
const decoration = {
    standard: 1,
    personal: 1.5,
    exclusive: 2,
    exclusiveIncreased: 2.5
}
let time = 0
let budget = 0

const column1 = document.getElementById("column1")
const column2 = document.getElementById("column2")
const column3 = document.getElementById("column3")

function RenderColumnElements() {
    for (let i = 0; i <= 9; i++) {
        createRangeElement(rooms[i], column1)
    }
    for (let i = 10; i <= 18; i++) {
        createRangeElement(rooms[i], column2)
    }
    for (let i = 19; i <= (rooms.length - 1); i++) {
        createRangeElement(rooms[i], column3)
    }
}
RenderColumnElements()
function createRangeElement(room, column) {
    const container = document.createElement("div")
    container.className = "range-container"

    const info = document.createElement("div");
    info.className = "range-info"

    const label = document.createElement("label")
    label.className = "form-control"
    label.htmlFor = "range"
    label.textContent = room.name

    const output = document.createElement("output");
    output.id = "rangevalue1"
    output.textContent = room.area

    const span = document.createElement("span")
    span.textContent = "кв.м"

    if (room.deletable) {
        const div = document.createElement("div")
        div.setAttribute("class", "delete-btn delete-range-input")
        div.textContent = "—"
        label.prepend(div)
    }
    if (room.cloneable) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        svg.setAttribute("class", "add-btn add-range-input")
        svg.setAttribute("width", "15")
        svg.setAttribute("height", "16")
        svg.setAttribute("viewBox", "0 0 15 16")
        svg.setAttribute("fill", "none")

        const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        rect1.setAttribute("x", "7")
        rect1.setAttribute("y", "0.833374")
        rect1.setAttribute("width", "1")
        rect1.setAttribute("height", "15")
        rect1.setAttribute("fill", "white")

        const rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        rect2.setAttribute("y", "7.83337")
        rect2.setAttribute("width", "15")
        rect2.setAttribute("height", "1")
        rect2.setAttribute("fill", "white")

        svg.appendChild(rect1)
        svg.appendChild(rect2)

        label.prepend(svg)
    }

    const input = document.createElement("input")
    input.type = "range"
    input.className = "input-range"
    input.value = room.area
    input.min = (room.id === "hallway" || room.id === "living-room" || room.id === "dining-room" || room.id === "kitchen" || room.id === "boiler-room" || room.id === "master-bedroom-1") ? room.min : "0"
    input.max = room.max
    input.id = room.id
    input.oninput = function () {
        output.textContent = this.value
    };

    info.appendChild(label);
    info.appendChild(output);
    info.appendChild(span);

    container.appendChild(info);
    container.appendChild(input);

    column.appendChild(container);
}
const landAreaRangeInput = document.getElementById('rangeland')
const landAreaNumberInput = document.getElementById('rangevalueplot')
const houseAreaInput = document.getElementById('rangevaluehouse')
const houseRangeInput = document.getElementById('rangehouse')
const numberInputs = document.querySelectorAll('input[type="number"]')
let rangeInputs = document.querySelectorAll('input[type="range"]')
let rangeContainers = document.querySelectorAll('.range-container')
let checkboxInputs = document.querySelectorAll('input[type="checkbox"]')
const addRangeInputButtons = document.querySelectorAll('.add-range-input')
let deleteRangeInputButtons = document.querySelectorAll('.delete-range-input')
const addCheckboxButtons = document.querySelectorAll('.add-checkbox')
let deleteCheckboxButtons = document.querySelectorAll('.delete-checkbox')
let selectedDecoration = document.querySelector('.tabs__item_selected')
const tabsItems = document.querySelectorAll('.tabs__item')
const collapseBtns = document.querySelectorAll('.collapse')

collapseBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const optionsContainer = btn.parentNode.querySelector('.options-container')
        if (btn.parentNode.classList.contains('checkboxes-container')) {
            optionsContainer.classList.toggle('options-container_collapsed-60')
        } else if (btn.parentNode.classList.contains('inputs-range-container')) {
            optionsContainer.classList.toggle('options-container_collapsed-57')
        }

        if (!optionsContainer.classList.contains('options-container_collapsed-60') && !optionsContainer.classList.contains('options-container_collapsed-57')) {
            btn.innerHTML = 'скрыть <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M1 10L8 2L15 10" stroke="#444460" stroke-width="2"/></svg>'
        } else {
            btn.innerHTML = 'показать ещё <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M1 1L8 9L15 1" stroke="#444460" stroke-width="2"/></svg>'
        }
    })
})


tabsItems.forEach(tab => {
    tab.addEventListener('click', function (e) {
        selectedDecoration.classList.remove('tabs__item_selected')
        e.currentTarget.classList.add('tabs__item_selected')
        selectedDecoration = document.querySelector('.tabs__item_selected')
        calculateBudget()
        document.querySelector('.budget__sum').innerHTML = budget
        calculateTime()
        document.querySelector('.time__number-years').innerHTML = Math.floor(time)
        document.querySelector('.time__number-months').innerHTML = Math.floor((time % 1) * 10)
    })
})


checkboxInputs.forEach(i => {
    i.addEventListener('input', checkboxesHandler)
})
function checkboxesHandler(e) {
    outdoorFacilities.forEach(f => {
        if (f.name === e.target.name) {
            if (e.target.checked) {
                f.amount += 1
            } else {
                f.amount -= 1
            }
        }
        calculateBudget()
        document.querySelector('.budget__sum').innerHTML = budget
        calculateTime()
        document.querySelector('.time__number-years').innerHTML = Math.floor(time)
        document.querySelector('.time__number-months').innerHTML = Math.floor((time % 1) * 10)
    })

}
addCheckboxButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let newOption = document.createElement('div')
        let lastInput = document.querySelector('.options-container input:last-of-type');
        let lastId = parseInt(lastInput.id.replace('r', ''))
        let newId = 'r' + (lastId + 1);
        let text = e.target.closest('.option').querySelector('label').textContent
        newOption.className = 'option';
        let newInput = document.createElement('input');
        newInput.type = 'checkbox';
        newInput.name = e.target.closest('.option').querySelector('input').name
        newInput.id = newId;
        let newLabel = document.createElement('label');
        newLabel.className = 'form-control';
        newLabel.htmlFor = newInput.name;
        let deleteBtn = document.createElement('div')
        deleteBtn.className = 'delete-btn delete-checkbox'
        deleteBtn.textContent = '—'
        newLabel.appendChild(deleteBtn)
        newLabel.appendChild(document.createTextNode(text))
        newOption.appendChild(newInput)
        newOption.appendChild(newLabel)
        e.target.closest('.option').insertAdjacentElement('afterend', newOption)
        newInput.addEventListener('input', checkboxesHandler)
        checkboxInputs = document.querySelectorAll('input[type="checkbox"]')
        deleteCheckboxButtons = document.querySelectorAll('.delete-checkbox')
        deleteBtn.addEventListener('click', deleteOption)
    })
})
deleteCheckboxButtons.forEach(btn => {
    btn.addEventListener('click', deleteOption)
});

function deleteOption(e) {
    const option = e.target.closest('.option')
    const input = option.querySelector('input')
    if (input.checked) {
        outdoorFacilities.forEach(f => {
            if (f.name === input.name) {
                f.amount -= 1
            }
            calculateBudget()
            document.querySelector('.budget__sum').innerHTML = budget
            calculateTime()
            document.querySelector('.time__number-years').innerHTML = Math.floor(time)
            document.querySelector('.time__number-months').innerHTML = Math.floor((time % 1) * 10)
        })
    }
    option.remove()
    deleteCheckboxButtons = document.querySelectorAll('.delete-checkbox')
    checkboxInputs = document.querySelectorAll('input[type="checkbox"]')
}


addRangeInputButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        let container = this.parentElement.parentElement.parentElement
        let newContainer = container.cloneNode(true)
        newContainer.querySelector('svg').remove()
        let deleteBtn = document.createElement('div')
        deleteBtn.className = 'delete-btn delete-range-input'
        deleteBtn.textContent = '—'
        newContainer.querySelector('label').prepend(deleteBtn)
        let input = container.querySelector("input")
        let idParts = input.id.split("-")
        let idNumber = parseInt(idParts[idParts.length - 1])
        idNumber++
        idParts[idParts.length - 1] = idNumber
        let newId = idParts.join("-")
        while (rooms.some(room => room.id === newId)) {
            idNumber++
            idParts[idParts.length - 1] = idNumber
            newId = idParts.join("-")
        }
        rooms.forEach(room => {
            if (room.id === input.id) {
                newRoom = { ...room }
                newRoom.id = newId
                newRoom.deletable = true
                rooms.push(newRoom)
            }
        })
        let newInput = newContainer.querySelector("input")
        newInput.id = newId
        container.parentNode.insertBefore(newContainer, container.nextSibling)
        deleteBtn.addEventListener('click', deleteRangeElement)
        rangeInputs = document.querySelectorAll('input[type="range"]')
        rangeContainers = document.querySelectorAll('.range-container')
        deleteRangeInputButtons = document.querySelectorAll('.delete-range-input')
        houseArea = 0
        rooms.forEach(room => {
            houseArea += Number(room.area)
        })
        houseAreaInput.value = Math.ceil(houseArea)
        houseRangeInput.value = Math.ceil(houseArea)
        landArea = houseArea / 100
        landAreaNumberInput.value = Math.ceil(landArea)
        landAreaRangeInput.value = Math.ceil(landArea)
        landAreaRangeInput.style.backgroundSize = (landAreaRangeInput.value - landAreaRangeInput.min) * 100 / (landAreaRangeInput.max - landAreaRangeInput.min) + '% 100%'
        calculateBudget()
        document.querySelector('.budget__sum').innerHTML = budget
        calculateTime()
        document.querySelector('.time__number-years').innerHTML = Math.floor(time)
        document.querySelector('.time__number-months').innerHTML = Math.floor((time % 1) * 10)
    });
})
function deleteRangeElement(e) {
    const rangeContainer = e.target.closest('.range-container')
    const input = rangeContainer.querySelector('input')
    rooms = rooms.filter(room => room.id !== input.id)
    rangeContainer.remove()
    rangeContainers = document.querySelectorAll('.range-container')
    rangeInputs = document.querySelectorAll('input[type="range"]')
    houseArea = 0
    rooms.forEach(room => {
        houseArea += Number(room.area)
    })
    houseAreaInput.value = Math.ceil(houseArea)
    houseRangeInput.value = Math.ceil(houseArea)
    landArea = houseArea / 100
    landAreaNumberInput.value = Math.ceil(landArea)
    landAreaRangeInput.value = Math.ceil(landArea)
    landAreaRangeInput.style.backgroundSize = (landAreaRangeInput.value - landAreaRangeInput.min) * 100 / (landAreaRangeInput.max - landAreaRangeInput.min) + '% 100%'
    calculateBudget()
    document.querySelector('.budget__sum').innerHTML = budget
    calculateTime()
    document.querySelector('.time__number-years').innerHTML = Math.floor(time)
    document.querySelector('.time__number-months').innerHTML = Math.floor((time % 1) * 10)

}
deleteRangeInputButtons.forEach(btn => {
    btn.addEventListener('click', deleteRangeElement)
})
document.body.addEventListener('input', function (e) {
    if (e.target.type === 'range') {
        handleInputChange(e)
        updateContent(e.target, e.target.parentNode.querySelector('span'), e.target.parentNode.querySelector('output'))
    }
});
rangeContainers.forEach(el => {
    const input = el.querySelector('input')
    const span = el.querySelector('span')
    const output = el.querySelector('output')
    rooms.forEach(room => {
        if (room.id === input.id) {
            input.value = room.area
        }
    })
    // Update content when page loads
    updateContent(input, span, output)
    input.addEventListener('input', () => updateContent(input, span, output))
});

function updateContent(input, span, output) {
    if (input.id === "rangeland" || input.id === "rangehouse") {
        return
    }
    if (input.value == 0) {
        span.innerHTML = ""
        output.innerHTML = ""
        input.classList.add('input-range_inactive')
        input.closest('.range-container').querySelector('label').classList.add('form-control_inactive')
    } else {
        // Restore the original value
        span.innerHTML = "кв.м"
        output.innerHTML = input.value
        input.classList.toggle('input-range_inactive', false)
        input.closest('.range-container').querySelector('label').classList.toggle('form-control_inactive', false)
    }
}
rooms.forEach(room => {
    houseArea += Number(room.area)
})

houseAreaInput.value = houseArea
houseRangeInput.value = houseArea
landArea = houseArea / 100
landAreaNumberInput.value = Math.ceil(landArea)
landAreaRangeInput.value = Math.ceil(landArea)
landAreaRangeInput.style.backgroundSize = (landAreaRangeInput.value - landAreaRangeInput.min) * 100 / (landAreaRangeInput.max - landAreaRangeInput.min) + '% 100%'
rangeInputs.forEach(input => {
    const min = input.min
    const max = input.max
    const val = input.value
    input.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
})
landAreaNumberInput.addEventListener('keydown', function (e) {
    const inputValue = Number(e.target.value + e.key)
    if (inputValue > 50) {
        e.preventDefault()
    }
})
function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        if (e.target.id === 'rangevaluehouse') {
            target = document.getElementById('rangehouse')
            if (houseArea > 0) {
                rooms.forEach(room => {
                    room.percentage = room.area / houseArea * 100 // save the percentage of the room from the total area of the house
                })
            }
            const prevHouseArea = houseArea
            houseArea = Number(e.target.value)
            if (houseArea > (landArea * 100)) {
                landArea = houseArea / 100
                landAreaNumberInput.value = Math.ceil(landArea)
                landAreaRangeInput.value = Math.ceil(landArea)
                landAreaRangeInput.style.backgroundSize = (landAreaRangeInput.value - landAreaRangeInput.min) * 100 / (landAreaRangeInput.max - landAreaRangeInput.min) + '% 100%'

            }
            let areaChangeRatio = 1
            if (prevHouseArea > 0) {
                areaChangeRatio = houseArea / prevHouseArea; // calculate the change ratio
            }
            rooms.forEach(room => {
                if (prevHouseArea === 0) {
                    room.area = houseArea / 100 * room.percentage
                    if (room.area > room.max) {
                        room.area = room.max
                    }
                } else {
                    room.area *= areaChangeRatio
                    if (room.area > room.max) {
                        room.area = room.max
                    }
                }
                rangeContainers.forEach(el => {
                    let input = el.querySelector('input')
                    if (input.id === room.id) {
                        input.value = Math.round(room.area)
                        input.style.backgroundSize = (input.value - input.min) * 100 / (input.max - input.min) + '% 100%'
                    }
                    updateContent(input, el.querySelector('span'), el.querySelector('output'))
                })
            })

            const min = target.min
            const max = target.max
            if (e.target.value) {
                target.value = e.target.value
            } else {
                target.value = 0
            }
            const val = target.value
            target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
            calculateBudget()
            document.querySelector('.budget__sum').innerHTML = budget
            calculateTime()
            document.querySelector('.time__number-years').innerHTML = Math.floor(time)
            document.querySelector('.time__number-months').innerHTML = Math.floor((time % 1) * 10)
            return
        } else if (e.target.id === 'rangevalueplot') {
            target = document.getElementById('rangeland')
            let prevArea = landArea
            let areaChangeRatio = 1
            landArea = Number(e.target.value)
            if ((landArea * 100) < houseArea) {
                if (prevArea > 0) {
                    areaChangeRatio = landArea / prevArea; // calculate the change ratio
                }
            }
            rooms.forEach(room => {
                room.area *= areaChangeRatio
            })

        }
    } else if (e.target.id === 'rangeland') {
        let prevArea = landArea
        landArea = Number(e.target.value)

        let areaChangeRatio = 1
        landArea = Number(e.target.value)
        if ((landArea * 100) < houseArea) {
            if (prevArea > 0) {
                areaChangeRatio = landArea / prevArea // calculate the change ratio
            }
        }
        rooms.forEach(room => {
            room.area *= areaChangeRatio
        })
        rangeContainers.forEach(cnt => {
            let input = cnt.querySelector('input')
            rooms.forEach(room => {
                if (room.id === input.id) {
                    input.value = Math.ceil(room.area)
                    cnt.querySelector('output').value = Math.ceil(room.area)
                    input.style.backgroundSize = (input.value - input.min) * 100 / (input.max - input.min) + '% 100%'
                }
            })
        })
    }
    else if (e.target.id === 'rangehouse') {
        if (houseArea > 0) {
            rooms.forEach(room => {
                if (room.area > 0) {
                    room.percentage = room.area / houseArea * 100 // save the percentage of the room from the total area of the house
                } else if (room.area === 0) {
                    room.percentage = 0
                }
            })
        }
        const prevHouseArea = houseArea
        houseArea = Number(e.target.value)
        if (houseArea > (landArea * 100)) {
            landArea = houseArea / 100
            landAreaNumberInput.value = Math.ceil(landArea)
            landAreaRangeInput.value = Math.ceil(landArea)
            landAreaRangeInput.style.backgroundSize = (landAreaRangeInput.value - landAreaRangeInput.min) * 100 / (landAreaRangeInput.max - landAreaRangeInput.min) + '% 100%'

        }
        let areaChangeRatio = 1
        if (prevHouseArea > 0) {
            areaChangeRatio = houseArea / prevHouseArea; // calculate the change ratio
        }
        rooms.forEach(room => {
            if (prevHouseArea === 0) {
                room.area = houseArea / 100 * room.percentage
            } else {
                room.area *= areaChangeRatio
            }
            rangeContainers.forEach(el => {
                let input = el.querySelector('input')
                if (input.id === room.id) {
                    input.value = Math.round(room.area)
                    input.style.backgroundSize = (input.value - input.min) * 100 / (input.max - input.min) + '% 100%'
                }
                updateContent(input, el.querySelector('span'), el.querySelector('output'))
            })
        })

        houseAreaInput.value = houseArea
        const min = target.min
        const max = target.max
        const val = e.target.value
        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
        calculateBudget()
        document.querySelector('.budget__sum').innerHTML = budget
        calculateTime()
        document.querySelector('.time__number-years').innerHTML = Math.floor(time)
        document.querySelector('.time__number-months').innerHTML = Math.floor((time % 1) * 10)
        return
    }
    const min = target.min
    const max = target.max
    if (e.target.value) {
        target.value = e.target.value
    } else {
        target.value = 0
    }
    const val = target.value
    rooms.forEach(room => {
        if (room.id === target.id) {
            room.area = target.value
        }
    })
    houseArea = 0
    rooms.forEach(room => {
        houseArea += Number(room.area)
    })
    rangeContainers.forEach(cnt => {
        if (houseArea === 0) {
            const input = cnt.querySelector('input')
            input.value = 0
            input.style.backgroundSize = 0
            updateContent(input, cnt.querySelector('span'), cnt.querySelector('output'))
        }
    })
    houseAreaInput.value = Math.ceil(houseArea)
    const houseRangeInput = document.getElementById('rangehouse')
    houseRangeInput.value = Math.ceil(houseArea)
    houseRangeInput.style.backgroundSize = (Math.ceil(houseArea) - houseRangeInput.min) * 100 / (houseRangeInput.max - houseRangeInput.min) + '% 100%'
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    if (target.id != "rangevalueplot" && target.id != "rangeland" && (houseArea / 100) > landArea) {
        landArea = houseArea / 100
        landAreaNumberInput.value = Math.ceil(landArea)
        landAreaRangeInput.value = Math.ceil(landArea)
        landAreaRangeInput.style.backgroundSize = (landAreaRangeInput.value - landAreaRangeInput.min) * 100 / (landAreaRangeInput.max - landAreaRangeInput.min) + '% 100%'
    }

    calculateBudget()
    document.querySelector('.budget__sum').innerHTML = budget
    calculateTime()
    document.querySelector('.time__number-years').innerHTML = Math.floor(time)
    document.querySelector('.time__number-months').innerHTML = Math.floor((time % 1) * 10)
}

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})
numberInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})
function calculateBudget() {
    budget = Math.ceil(Number((houseArea) * (selectedDecoration.id === 'exclusive' ? decoration.exclusiveIncreased : decoration[(selectedDecoration.id)]) * 200000) / 1000000)
}
function calculateTime() {
    if (houseArea < 600) {
        time = Math.ceil(1 * decoration[(selectedDecoration.id)] * 10) / 10
    } else if (houseArea >= 600 && (houseArea + landArea) <= 1200) {
        time = Math.ceil(1.5 * decoration[(selectedDecoration.id)] * 10) / 10
    }
}
calculateBudget()
calculateTime()
document.querySelector('.time__number-years').innerHTML = Math.floor(time)
document.querySelector('.time__number-months').innerHTML = Math.floor((time % 1) * 10)
document.querySelector('.budget__sum').innerHTML = budget 
