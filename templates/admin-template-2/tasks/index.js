window.initTasks = function () {
    new window.Smart.Kanban('#kanban', {
        collapsible: true,
        dataSource: getKanbanData(),
        editable: true,
        userList: true,
        users: [
            { id: 0, name: 'Andrew', image: '../../images/people/andrew.png' },
            { id: 1, name: 'Anne', image: '../../images/people/anne.png' },
            { id: 2, name: 'Janet', image: '../../images/people/janet.png' },
            { id: 3, name: 'John', image: '../../images/people/john.png' },
            { id: 4, name: 'Laura', image: '../../images/people/laura.png' }
        ],
        columns: [
            { label: 'Por hacer', dataField: 'toDo' },
            { label: 'En proceso', dataField: 'inProgress' },
            { label: 'Revisando', dataField: 'testing' },
            { label: 'Terminado', dataField: 'done' }
        ]
    });
}