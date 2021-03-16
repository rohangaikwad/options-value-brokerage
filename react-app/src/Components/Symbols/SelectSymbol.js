import React from 'react';
import MainContext from '../../Contexts/MainContext';
import Select from 'react-select';

import { SERVICE_URL } from './../utils';

export default class SelectSymbol extends React.Component {
    static contextType = MainContext;

    constructor(props) {
        super(props);
        this.state = {
            selectOptions: [],
            symbol: ''
        }
    }

    componentDidMount() {
        this.fetchSymbols()
    }

    fetchSymbols = () => {
        fetch(`${SERVICE_URL}/api/symbols`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.context.setSymbols(res);
                let options = Object.keys(res).map(o => {
                    return {
                        value: o,
                        label: o
                    }
                });
                this.setState({ selectOptions: options })
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleChange = selectedOption => {
        let symbol = selectedOption.value;
        if (symbol !== this.state.symbol) {
            this.checkSymbolOptionsData(symbol);
        }
        this.setState({ symbol: symbol })
        this.context.setSymbol(symbol);
        console.log(`Option selected:`, selectedOption);
    };

    checkSymbolOptionsData = (symbol) => {
        if (!this.context.options[symbol]) {
            this.fetchSymbolOptionsData(symbol);
        }
    }

    fetchSymbolOptionsData = (symbol) => {
        console.log(`${SERVICE_URL}/api/options/${symbol}`)
        fetch(`${SERVICE_URL}/api/options/${symbol}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                let expiry = res.records.expiryDates.map(d => {
                    return {
                        date: d,
                        data: res.records.data.filter(x => x.expiryDate === d)
                    }
                });

                let data = {
                    value: res.records.underlyingValue,
                    expiry: expiry,
                    strikePrices: res.records.strikePrices
                }

                let options = { ...this.context.options };
                options[symbol] = data;

                this.context.setOptions(options)
                console.log(options);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <MainContext.Consumer>
                {consumer => <div>
                    <Select
                        onChange={this.handleChange}
                        options={this.state.selectOptions}
                    />
                </div>}
            </MainContext.Consumer>
        )
    }
}