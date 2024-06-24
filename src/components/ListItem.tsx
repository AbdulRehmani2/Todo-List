interface ListItem{
    text: string;
}

function ListItem({ text }: ListItem)
{
    return(
        <div className="item-container">
            <input type="checkbox" name="isdone" id="isdone" />
            <span>{text}</span>
            <button>X</button>
        </div>
    )
}

export default ListItem