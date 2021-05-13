window.initDefault = function () {
    const
        sourceData = [
            {market: 'Historia', revenue: 5, value: 55},
            {market: 'Matemáticas', revenue: 2.5, value: 25},
            {market: 'Geografía', revenue: 1.3, value: 13},
            {market: 'Español', revenue: 1.2, value: 12}
        ],
        clientsData = [
            {name: 'Marcia Gomez', subject: 'Trabajo en equipo', email: 'marcia.gomez@example.com', date: '01.01.2021'},
            {name: 'Marvin George', subject: 'Lección de ayer', email: 'marvin.george@example.com', date: '11.13.2021'},
            {name: 'Carole Pearson', subject: 'Tarea para mañana.', email: 'carole.pearson@example.com', date: '08.28.2021'},
            {name: 'Leroy Shelton', subject: 'Faltas injustificadas', email: 'leroy.shelton@example.com', date: '06.21.2021'},
            {name: 'Daisy Murphy', subject: 'Exámen cancelado', email: 'daisy.murphy@example.com', date: '05.15.2021'}
        ];

    const customColors = ['#16736F', '#DB4437', '#1877f2', '#62B773'];
    const chart1 = new window.Smart.Chart('#sourceChart', {
        animation: 'none',
        theme: getTheme(),
        caption: '',
        description: '',
        showLegend: false,
        showBorderLine: false,
        padding: {left: 0, top: 0, right: 0, bottom: 0},
        dataSource: sourceData,
        seriesGroups: [
            {
                type: 'pie',
                series: [
                    {
                        dataField: 'revenue',
                        displayText: 'market',
                        radius: 70,
                        selectedRadiusChange: 2

                    }
                ]
            }
        ]
    });

    chart1.addColorScheme('custom', customColors);
    chart1.colorScheme = 'custom';
    chart1.refresh();

    new window.Smart.Table('#sourceTable', {
        dataSource: sourceData,
        columns: [
            {
                label: 'Materia', dataField: 'market', dataType: 'string', formatFunction(settings) {
                    settings.template = `<div class="color-box-container"><div class="color-box ${settings.value.toLowerCase()}"></div>${settings.value}</div>`;
                }
            },
            {
                label: 'Horas', dataField: 'revenue', dataType: 'number', formatFunction(settings) {
                    settings.template = `${settings.value} horas`;
                }
            },
            {
                label: 'Porcentaje', dataField: 'value', dataType: 'number', formatFunction(settings) {
                    settings.cell.classList.add(settings.value > 0 ? 'positive' : 'negative');

                    settings.template = settings.value + '%';
                }
            }
        ]
    });

    new window.Smart.Table('#hoverableTable', {
        dataSource: clientsData,
        tooltip: false,
        columns: [
            {label: 'Nombre', dataField: 'name', dataType: 'string'},
            {label: 'Título', dataField: 'subject', dataType: 'string'},
            {label: 'E-mail', dataField: 'email', dataType: 'string'},
            {label: 'Fecha', dataField: 'date', dataType: 'date'},
            {label: 'Acción', dataField: 'action', formatFunction: function (settings) {
                    settings.template = '<div class="text-center"><a href="#" class="btn btn-sm text-danger btn-light hover-bg-primary hover-text-secondary"><i class="material-icons">delete</i></a><a href="#" class="btn btn-sm text-primary btn-light hover-bg-primary hover-text-secondary mx-3"><i class="material-icons">visibility</i></a></div>';
                }
            }
        ]
    });


    addTodayMenuOpenHandlers();

    
}

