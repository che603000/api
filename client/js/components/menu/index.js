/**
 * Created by alex on 02.12.2015.
 */
"use strict";
var ReactDOM = require('react-dom');
import Menu from './main'

const options = [
    {
        type: "Header",
        props: {
            name: "Компания"
        }
    },
    {
        type: "Item",
        props: {
            name: "Поиск сотрудника",
            icon: "search",
            url: "#search/90"
        }

    },
    {
        type: "Item",
        props: {
            name: "Структура АПИ",
            icon: "remove",
            url: "#strucure",
            active: true
        }

    },
    {
        type: "Header",
        props: {
            name: "Приложения"
        }
    },
    {
        type: "SubMenu",
        props: {
            name: "Сервисы АПИ"
        },
        subItems: [
            {
                type: "SubItem",
                props: {
                    name: "Бухгалтерия"
                }

            }
        ]
    }
];


ReactDOM.render(
    <Menu options={options}/>,
    document.getElementById('mainnav-menu-wrap')
);