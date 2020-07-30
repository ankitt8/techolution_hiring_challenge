
function createTable(data) {
    // sort the data based on name of candidate
    data.sort(compare);
    // get topper marks
    const topperScore = getTopperScore(data);
    setStatusOfStudents(data, topperScore);

    const tableElement = document.querySelector('table');
    console.log(tableElement)
    const headerList = ['Student Name', 'Roll Number', 'Total Marks', 'Status'];
    generateTableHeader(tableElement, headerList);

    const fragment = document.createDocumentFragment();
    const fieldsToDisplay = ['name', 'rollNumber', 'totalMarks', 'status']
    for (let i = 0; i < data.length; ++i) {
        const trElement = document.createElement('tr');
        const cellDataFragment = document.createDocumentFragment();
        for (let j = 0; j < fieldsToDisplay.length; ++j) {
            const tdataElement = document.createElement('td');
            // i can captilize either the data itself using below code or using css
            // if (fieldsToDisplay[j] == 'name') {
            //     tdataElement.innerHTML = data[i]['name'][0].toUpperCase() + data[i]['name'].slice(1);
            // }
            // 
            // else tdataElement.innerHTML = data[i][fieldsToDisplay[j]];
            // because its just for presentation so captilizing using css
            tdataElement.innerHTML = data[i][fieldsToDisplay[j]];
            if (fieldsToDisplay[j] == 'name') tdataElement.classList.add('capitalize');
            if (fieldsToDisplay[j] == 'totalMarks') tdataElement.classList.add('alignRight');
            cellDataFragment.appendChild(tdataElement);
        }
        if (data[i].status == 'Topper') trElement.classList.add('green');
        else if (data[i].status == 'Fail') trElement.classList.add('red');
        trElement.appendChild(cellDataFragment);
        fragment.appendChild(trElement)
    }
    tableElement.appendChild(fragment);

    tableElement.appendChild(fragment)
}
function compare(studenta, studentb) {
    if (studenta.name < studentb.name) return -1;
    else if (studenta.name > studentb.name) return 1;
    return 0;
}
function generateTableHeader(tableElement, headerList) {
    // const tableElement = document.querySelector('table');
    const mainHeading = "Students Result Board";
    const fragment = document.createDocumentFragment();
    // adding main header row
    const mainHeadingRow = document.createElement('tr');
    const thElement = document.createElement('th');
    thElement.innerHTML = mainHeading;
    thElement.colSpan=headerList.length;
    mainHeadingRow.appendChild(thElement);
    fragment.appendChild(mainHeadingRow);
    // adding subheader
    const subHeadingRow = document.createElement('tr');
    const subHeadingfragment = document.createDocumentFragment();
    for (let i = 0; i < headerList.length; ++i) {
        const thElement = document.createElement('th');
        thElement.innerHTML = headerList[i];
        thElement.classList.add('italics');
        subHeadingfragment.appendChild(thElement);
    }
    subHeadingRow.appendChild(subHeadingfragment);
    fragment.appendChild(subHeadingRow);
    tableElement.appendChild(fragment);
}
function getTopperScore(data) {
    var topperScore = 0;
    for (let i = 0; i < data.length; ++i) {
        const { marks } = data[i];
        // console.log(marks)
        const totalMarks = Object.values(marks).reduce(
            (accumulator, currentvalue) => (accumulator - 0) + (currentvalue - 0)
        )
        data[i].totalMarks = totalMarks
        // console.log(data[i]);
        // console.log(totalMarks);
        topperScore = Math.max(totalMarks, topperScore);
    }
    // console.log(`TopperScore, ${topperScore}`);
    return topperScore;
}

function setStatusOfStudents(data, topperScore) {
    const minMarks = 20;
    for (let i = 0; i < data.length; ++i) {
        // console.log(data[])
        const { name, marks, rollNumber } = data[i];
        // console.log(marks);
        passStatus = !Object.values(marks).some(mark => mark < minMarks);
        // console.log(passStatus)
        if (data[i].totalMarks == topperScore) data[i].status = 'Topper';
        else if (passStatus) data[i].status = 'Pass';
        else data[i].status = 'Fail';
        // console.log(data[i])
    }
}
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        createTable(data);
    });



