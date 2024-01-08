import '../../styles/FilterHuis.css';

function FilterParkeerplaats(props) {
    function opFilterParkeerplaatsKlik(event) {
        props.filterParkeerplaats(event.target.value);
    }

    return (
        <section className="filter-area">
            <select name="parkeerplaats" onChange={opFilterParkeerplaatsKlik}>
                <option value="alle">Alle</option>
                <option value="met-parkeerplaats">Met parkeerplaats</option>
                <option value="zonder-parkeerplaats">Zonder parkeerplaats</option>
            </select>
        </section>
    );
}

export default FilterParkeerplaats;