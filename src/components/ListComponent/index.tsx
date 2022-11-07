import React, { useState, useEffect, ReactNode } from "react";
import ListItem from "../ListItem";
type Props = {
    numItems: number;
    itemHeight: number;
    windowHeight: number;
    items: { index: number, name: string, checked: boolean }[];
    handleToggleCheck: (i: number) => void;
}
const ListComponent = ({ items, numItems, itemHeight, windowHeight, handleToggleCheck }: Props) => {
    const [scrollTop, setScrollTop] = useState(0);
    const innerHeight = numItems * itemHeight;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
        numItems - 1,
        Math.floor((scrollTop + windowHeight) / itemHeight)
    );
    const rendereditems = [];
    for (let i = startIndex; i <= endIndex; i++) {
        rendereditems.push(
            <ListItem key={i} items={items} index={i} itemHeight={itemHeight} handleToggleCheck={handleToggleCheck}
            />
        );
    }

    const onScroll = e => setScrollTop(e.currentTarget.scrollTop);

    return (
        <div className="scroll" style={{ overflowY: "auto" }} onScroll={onScroll}>
            <div
                className="inner"
                style={{ position: "relative", height: `${innerHeight}px` }}
            >
                {rendereditems}

            </div>
        </div>
    );
};


export default ListComponent;
