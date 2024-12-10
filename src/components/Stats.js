export default function Stats({items}) {

    if(!items.length) return <p className="stats"><em>Start adding some items to your packing list 😋</em></p>

    const sumOfItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const packedPercentage = Math.round((packedItems / sumOfItems) * 100) || 0;


    return <footer className="stats">
        <em>
            {packedPercentage === 100 ? 'You got everything ready to go 😎' :
                `You have ${sumOfItems} items in your list and you already packed ${packedItems} (${packedPercentage}%) 💼`}
        </em>
    </footer>
}
