import React from 'react';
import MainContext from './Contexts/MainContext';

import Calculator from './Components/BrokerageCalculator/Calculator';
//import Symbols from './Components/Symbols/Symbols';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            symbols: [],
            symbol: '',
            options: {}
        }
    }

    render() {
        return (            
            <MainContext.Provider value={{
                symbols: this.state.symbols,
                setSymbols: (data) => this.setState({symbols: data}),
                symbol: this.state.symbol,
                setSymbol: (data) => this.setState({symbol: data}),
                options: this.state.options,
                setOptions: (data) => this.setState({options: data})
            }}>
                <div className="main-container">
                    {/* <Symbols /> */}
                    <Calculator />
                </div>
            </MainContext.Provider>
        )
    }
}

export default App;