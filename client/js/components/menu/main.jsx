"use strict";

var React = require('react');
import Lib from './items';


export default class MainMenu extends React.Component {
    constructor(props) {
        super();
        this.options= props.options;
        setTimeout(()=> {
            console.log(this);
        }, 1000)
    }


    itemRender(menu) {
        var children = [],
            props = menu.props;

        if(!menu.type || !menu.props.name ) {
            console.log(menu);
            throw Error('not name or type...');
        }

        _.extend(props, {ref: props.url, key: props.name});
        if (menu.subItems)
            children = menu.subItems.map(opt=> this.itemRender(opt));

        return React.createElement(Lib[menu.type], props, children);
    }

    render() {
        return (
            <div className="nano">
                <div className="nano-content">
                    <ul id="mainnav-menu" className="list-group">
                        {this.options.map(opt=>this.itemRender(opt), this)}
                    </ul>
                </div>
            </div>
        )
    }
}

//{this.itemRender(Header, {name:"Компания"})}
//{this.itemRender(Item, {name:"Поиск сотрудника", icon:"fa fa-search", url:"#search/90"})}
//
//<Item name="Структура АПИ" icon="fa fa-dashboard" active ref="#company"/>
//<Header name="Новости..."/>
//    <Item name="Вакансии" icon="fa fa-search"/>
//    <Item name="Мир АПИ" icon="fa fa-dashboard"/>
//    <Header name="Приложения"/>
//    <SubMenu name="Сервисы АПИ">
//    <SubItem name="Бухгалтерия"></SubItem>
//    <SubItem name="Контроль времени"></SubItem>
//    </SubMenu>