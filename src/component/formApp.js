import React from 'react'

class FormApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = { Variables: null }
    }

    componentDidMount() {
        fetch('https://formularios-prueba-tecnica-6ihrk4y23q-ue.a.run.app/formularios/api/v3/prueba_tecnica')
            .then((response) => {
                return response.json()
            })
            .then((Variables) => {
                this.setState({ Variables: Variables })
                console.log(Variables);
            })

    }
    render() {
        if (this.state.Variables !== null) {
            return (
                <div className="container-fluid">
                    <variablesList listado={this.state.Variables} />
                </div>
            )
        } else {
            return <p className="text-center">Loading...</p>
        }
    }
}
export default FormApp;