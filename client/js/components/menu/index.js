/**
 * Created by alex on 02.12.2015.
 */
"use strict";

import Menu from './main'

const options = [
    {
        type: "Item",
        props: {
            name: "Главная",
            icon: "star",
            url: "#main"
        }
    },
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
            url: "#search"
        }

    },
    {
        type: "Item",
        props: {
            name: "Структура АПИ",
            icon: "remove",
            url: "#structure"
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
            name: "Сервисы АПИ",
            url:"#error"
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
    <Menu options={options} active="#structure"/>,
    document.getElementById('mainnav-menu-wrap')
);