import '../../styles/FilterHuis.css';

function FilterPrijs(props) {
    function opFilterPrijsKlik(event) {
        props.filterPrijs(event.target.value);
    }

    return (
        <section className="filter-area">
            <select name="prijsRange" onChange={opFilterPrijsKlik}>
                <option value="alles">Alles</option>
                <option value="0-300000">0 - 300000</option>
                <option value="300000-400000">300000 - 400000</option>
                <option value="400000-500000">400000 - 500000</option>
                <option value="500000-600000">500000 - 600000</option>
                <option value="600000+">600000+</option>
            </select>
        </section>
    );
}

export default FilterPrijs;