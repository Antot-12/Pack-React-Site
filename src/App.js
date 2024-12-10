    import {useState} from "react";
    import Logo from "./components/Logo";
    import Form from "./components/Form";
    import PackingList from "./components/PackingList";
    import Stats from "./components/Stats";

    export default function App() {
        const [items, setItems] = useState([]) ;

        function handleAtItems(item)
        {
            setItems(items=> [...items,item]);
        }

        function handleDeleteItems(id)
        {
            setItems(items.filter(item => item.id !== id));
        }

        function handleToggleItem(id)
        {
            setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed } : item));
        }

        function DeteleItems_fromListBTN()
        {
            const confirmed = window.confirm('Are you sure you want to delete it?');

            if (confirmed) setItems([]);
        }

        return <div className="app">
            <Logo></Logo>
            <Form onAddItems={handleAtItems}></Form>
            <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItems={handleToggleItem} onDelBTN={DeteleItems_fromListBTN}></PackingList>
            <Stats items={items}></Stats>
        </div>
    }
