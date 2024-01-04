import '../../styles/FilterHuis.css';

function FilterPrijs(props) {
    function opFilterPrijsKlik(event) {
        props.filterPrijs(event.target.value);
    }

    return (
        <section className="filter-area">
            <select name="prijsRange" onChange={opFilterPrijsKlik}>
                <option value="alles">Alles</option>
                <option value="0-100000">0 - 100000</option>
                <option value="100000-200000">100000 - 200000</option>
                <option value="200000-300000">200000 - 300000</option>
                <option value="300000-400000">300000 - 400000</option>
                <option value="500000+">500000+</option>
            </select>
        </section>
    );
}

export default FilterPrijs;