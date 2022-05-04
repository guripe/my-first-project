function tableRender(){
    const $tbody = document.querySelector('#table tbody')

    let content = ""

    for (let index = 0; index < list.length; index++){
        const item = list[index]
        content += `
            <tr>
                <td>${item.description}</td>
                <td>${item.price}</td>
                <td> xxxx </td>
                <td>${item.dueDate}</td>
            </tr>
        `
    }
    
    $tbody.innerHTML=content;
}

let list = []

function button(){
    const description = document.querySelector("[name='description']").value
    const price = document.querySelector("[name='price']").value
    const dueDate = document.querySelector('[name="dueDate"]').value
    list.push({description,price,dueDate})
    tableRender()
    localStorage.setItem("content", JSON.stringify(list))
}

list = JSON.parse(localStorage.getItem("content")) || []
tableRender()

/* lkdvldhvlujaçv */