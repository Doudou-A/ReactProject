class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
                      fetch: null,};
    }

    handleChange = this.handleChange.bind(this);

    handleChange(event) {
        // this.fetch.abort();
        event.persist();
        this.setState({value: event.target.value});

        class Cities extends React.Component {
            state = {
                error: null,
                isLoaded: false,
                cities: [],
                messages: '',
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
                this.setState({fetch});
            }

            handleClick = this.handleClick.bind(this);

            handleClick(event) {
                // var value = event.currentTarget.value;
                var city = this.state.cities.find(ville => ville.villeId == event.currentTarget.value);
                // var city = this.state.cities.filter( (ville) => ville > event.currentTarget.value);
                console.log(city);

                // this.state.cities.map(cityComplet =>
                //     if(cityComplet.villeId == city) return cityComplet
                // );
                if (city.villeId == 28334){
                    this.setState({
                        messages: ["Carrefour","planeteMode","KingJouet","MEILLEUR VILLE DE FRANCE !"," Kebab"," Coiffeur"]
                    })
                }else if (city.villeId == 28142){
                    this.setState({
                        messages: ["AUCHAN","Voisin de Pierre-Bénite"]
                    })
                }

                map.setCenter(new google.maps.LatLng(city.villeLatitudeDeg, city.villeLongitudeDeg));
                map.setZoom(13);
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
                                    { this.state.messages ?
                                        <button className={"giv"}>{this.state.messages.map(message => (
                                        <ul>
                                            <li>{message}</li>
                                        </ul>
                                        ))}
                                        </button>
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
