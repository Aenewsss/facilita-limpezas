const Filter = () => {

    return (
        <div className="form-floating">
            <input type="text" required className="form-control " id="floatingInputSearchName" placeholder="José" />
            <label htmlFor="floatingInputSearchName">Procurar cliente</label>
        </div>
    );
}

export default Filter;