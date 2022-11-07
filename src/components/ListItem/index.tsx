
type Props = {
    itemHeight: number;
    index: number;
    items: { index: number, name: string, checked: boolean }[];
    handleToggleCheck: (i: number) => void;
}

const ListItem = ({ items, index, itemHeight, handleToggleCheck }: Props) => {
    const i = items[index];
    return (
        <div key={i.name} className="single-item"


            style={{ top: `${index * itemHeight}px`, }}
        >
            <div className="content">
                <h4>
                    {i.name}
                </h4>
                <label className="switch">
                    <input type="checkbox" onChange={() => handleToggleCheck(i.index)} />
                    <span className="slider "></span>
                </label>

            </div>
        </div>
    );
}

export default ListItem;
