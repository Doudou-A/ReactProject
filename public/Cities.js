class Cities extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        cities: []
    };

    componentDidMount = () => {
        fetch(" https://localhost:8000/french/city")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                            isLoaded: true,
                            cities: result.data
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
                        // <li key={item.name}>
                        //     {item.name} {item.price}
                        // </li>
                        <li>
                            {city.villeNom}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

const cities = document.querySelector('#cities');
ReactDOM.render(<Cities/>, cities);