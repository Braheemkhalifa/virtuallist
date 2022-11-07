import { useEffect, useState } from "react";
import ListComponent from "../ListComponent";



const HomeComponent = () => {
    const [count, setCount] = useState(100000);
    const [items, setItems] = useState([]);
    const [checkedItemsCount, setCheckedItemsCount] = useState(0);

    useEffect(() => {
        // repopulate the list when count changes
        setItems(
            new Array(count)
                .fill(null)
                .map((_, i) => ({ index: i, name: `Item ${i}`, checked: false }))
        );
    }, [count]);

    const handleAddsingleList = () => {
        setCount(count + 1);

    }

    const handleToggleCheck = i => {
        const newItems = items.slice();
        newItems[i].checked = !newItems[i].checked;
        setItems(newItems);
        const checkedItemsList = newItems.filter(
            singleItem => singleItem.checked == true
        );
        setCheckedItemsCount(checkedItemsList.length)
    };
    return (

        <div className="main">

            <div className="list-wrapper">
                <div className="header">

                    <div className="title">

                        List Lenght is {count} and  {checkedItemsCount} item(s) Checked
                    </div>

                    <button className="add" onClick={handleAddsingleList}>
                        Add One Item
                    </button>
                </div>

                <ListComponent
                    items={items}
                    numItems={items.length}
                    itemHeight={50}
                    windowHeight={500}
                    handleToggleCheck={handleToggleCheck}
                />
            </div>
        </div>

    )
}

export default HomeComponent;
