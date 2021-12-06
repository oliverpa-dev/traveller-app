import { useState } from 'react';
import DragItem from '../../components/DragItem'
import DropItem from '../../components/DropItem/index'
import { OptionsContainer, EmptyBackpack } from './styles'

const DragChoice = ({ items, icon, choices, setChoice }) => {
    return (
        <>
            <EmptyBackpack>
                <DropItem
                    onDrop={id => {
                        setChoice(id, false)
                    }}
                    img={icon}
                    empty={Object.keys(items).length}
                    outside={false}
                >
                    {Object.keys(items)
                        .filter(key => choices[key])
                        .map(key => { return { ...items[key], id: key } })
                        .map(item => <DragItem color={item.color} id={item.id} data={item} key={item.id} />)}
                </DropItem>

            </EmptyBackpack>
            <OptionsContainer>

                <DropItem
                    onDrop={id => {
                        setChoice(id, true)
                    }}
                    outside={true}
                >
                    {Object.keys(items)
                        .filter(item => !choices[item])
                        .map(key => { return { ...items[key], id: key } })
                        .map(item => <DragItem color={item.color} id={item.id} data={item} key={item.id} />)}
                </DropItem>
            </OptionsContainer>
        </>
    );
}

export default DragChoice