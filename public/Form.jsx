
class Form extends React.Component {
    state = {
        value: "dac"
    };

    render() {
        return (
            <form>
                <label>
                    Nom :
                    <input type="text" value={this.state.value} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}
const form = document.querySelector('#form');
ReactDOM.render(<Form/>, form);
