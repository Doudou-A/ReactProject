class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = this.handleChange.bind(this);

    handleChange(event) {
        event.persist()
        this.setState({value: event.target.value});

        class Cities extends React.Component {
            state = {
                error: null,
                isLoaded: false,
                cities: [],
                message: ''
            };

            componentDidMount() {
                fetch(" https://localhost:8000/french/city/" + event.target.value)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({
                                    isLoaded: true,
                                    cities: result.data,
                                }
                            );
                        },

                        (error) => {
                            this.setState({
                                    isLoaded: true,
                                    error
                                },
                                console.log(error)
                            );
                        }
                    )
            }

            handleClick = this.handleClick.bind(this);

            handleClick(event) {
                var city = event.currentTarget.value;
                // this.state.cities.map(cityComplet =>
                //     if(cityComplet.villeId == city) return cityComplet
                // );
                if (city == 28334){
                    this.setState({
                        message: "MEILLEUR VILLE DE FRANCE !"
                    })
                }else if (city == 28142){
                    this.setState({
                        message: "AUCHAN."
                    })
                }
                map.setCenter(new google.maps.LatLng(64.85599578876611, -147.83363628361917));
                map.setZoom(15);
            }

            render() {
                const {error, isLoaded, cities} = this.state;
                if (error) {
                    return <div>Erreur : {error.message}</div>;
                } else if (!isLoaded) {
                    return <div>Chargement…</div>;
                } else {
                    return (
                        <ul>
                            {cities.map(city => (
                                <div key={city.villeId}>
                                    <button value={city.villeId} onClick={this.handleClick} className={"city"}>
                                        {city.villeNom}
                                    </button>
                                    { this.state.message ?
                                        <button className={"giv"}>{this.state.message}</button>
                                        : null }
                                </div>
                            ))}
                        </ul>
                    );
                }
            }
        }

        const cities = document.querySelector('#cities');
        ReactDOM.render(<Cities/>, cities);
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <label>
                    Nom :
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
            </form>
        );
    }
}

const form = document.querySelector('#form');
ReactDOM.render(<Form/>, form);
