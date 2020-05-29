import React from 'react'

class FormApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = { Variables: [] }
    }

    componentWillMount() {
        fetch('https://formularios-prueba-tecnica-6ihrk4y23q-ue.a.run.app/formularios/api/v3/prueba_tecnica')
            .then((response) => {
                return response.json()
            })
            .then((Variables) => {
                this.setState({ Variables: Variables })
            })
    }
    render() {
        if (this.state.Variables.length > 0) {
            return (
                <div className="container-fluid">
                    <variablesList listado={this.state.Variables} />
                </div>
            )
        } else {
            return <p className="text-center">No hay datos</p>
        }
    }
}
export default FormApp;