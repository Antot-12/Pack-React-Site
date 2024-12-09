    import {useState} from "react";

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

        return <div className="app">
            <Logo></Logo>
            <Form onAddItems={handleAtItems}></Form>
            <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItems={handleToggleItem}></PackingList>
            <Stats></Stats>

        </div>
    }

    function Logo() {
        return <h1>😍 Pack Together 💼</h1>
    }

    function Form({onAddItems}) {

        const [desctiptions, setDesctiptions] = useState("") ;
        const [selects, setSelects] = useState(1) ;




        function HandleSumbit(e)
        {
            e.preventDefault();

            if(!desctiptions) return;

            // const newItem = {desctiptions,selects, packed:false, id: Date.now()};
            const newItem = {description: desctiptions, quantity: selects, packed: false, id: Date.now()};

            setDesctiptions("");
            console.log(newItem);

            onAddItems(newItem);

            setSelects(1);
        }

        return <form className="add-form" onSubmit={HandleSumbit}>
            <h3> What do you need for your trip? 😎</h3>

                <select value={selects} onChange={e => setSelects(Number(e.target.value))}>

                {Array.from({length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>
                    {num}
                </option>)}
            </select>
            <input type="text" placeholder="Item... " value={desctiptions} onChange={e => setDesctiptions(e.target.value)}/>
            <button>Add</button>
        </form>
    }

    function Item({item, onDeleteItems, onToggleItems}) {
        return <li>
            <input type="checkbox" value={item.packed} onChange={e => onToggleItems(item.id)}/>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        {item.quantity} {" "}
            {item.description}
        </span>
            <button onClick={() => onDeleteItems(item.id)}>❌</button>
        </li>;
    }

    function PackingList({items, onDeleteItem, onToggleItems}) {
        return <div className="list">
            <ul>
                {
                    items.map(item => <Item key={item.id} item={item} onDeleteItems={onDeleteItem} onToggleItems={onToggleItems}/>)
                }
            </ul>
        </div>

    }

    function Stats() {
        return <footer className="stats">
            <em>
                You have X items in your list and you already packed X (X%) 💼
            </em>
        </footer>
    }
