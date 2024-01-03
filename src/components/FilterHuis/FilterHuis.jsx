import '../../styles/FilterHuis.css';

function FilterHuis(props) {
    function opFilterKlik(event){
        props.filterHuis(event.target.value);
    }
    return (
        <section className="filter-area">
            <select name="isBeschikbaar" onChange={opFilterKlik}>
                <option value="alles">Alles</option>
                <option value="beschikbaar">Beschikbaar</option>
                <option value="verkocht">Verkocht</option>
                <option value="in-optie">in-optie</option>
            </select>
        </section>
    )
  }

  export default FilterHuis;