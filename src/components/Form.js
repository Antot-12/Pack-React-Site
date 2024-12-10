import {useState} from "react";

export default function Form({onAddItems}) {

    const [desctiptions, setDesctiptions] = useState("") ;
    const [selects, setSelects] = useState(1) ;

    function HandleSumbit(e)
    {
        e.preventDefault();

        if(!desctiptions) return;

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
