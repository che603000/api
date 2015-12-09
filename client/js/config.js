module.exports = {
    "menus": [
        {
            "route": "main",
            "type": "Item",
            "options": {
                "name": "Главная",
                "icon": "star",
                "href": "#main"
            }
        },
        {
            "route": "new",
            "type": "Item",
            "options": {
                "name": "Новости",
                "icon": "star",
                "href": "#new"
            }
        }, {
            "route": "new/:index",
            "type": "Item",
            "options": {
                "name": "Новости АПИ",
                "icon": "star",
                "href": "#new/0"
            }
        },
        {
            "route": null,
            "type": "Header",
            "options": {
                "name": "Приложения"
            }
        },
        {
            "route": "new",
            "type": "SubMenu",
            "options": {
                "name": "Сервисы",
                "icon": "list"
            },
            "subMenu": [
                {
                    "route": "new1",
                    "type": "Item",
                    "options": {
                        "name": "Новости1",
                        "icon": "star",
                        "href": "#new1"
                    }
                }

            ]
        }
    ],
    "routes": [
        {
            route: "err404",
            module: "err404",
            options: {}
        },
        {
            route: "main",
            module: "static",
            options: {}
        },
        {
            route: "new",
            module: "static",
            options: {}

        },
        {
            route: "new/:index",
            module: "static",
            options: {}

        },
        {
            route: "new1",
            module: "static",
            options: {}

        }


    ]
}
