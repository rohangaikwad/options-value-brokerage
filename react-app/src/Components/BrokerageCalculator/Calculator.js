import React from 'react';

import MIS from './MIS';
import CNC from './CNC';
import FO from './FO';
import FinvasiaFO from './FinvasiaFO';

export default class Calculator extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            buy: 25, sell: 25.25, qty: 225, active: "o"
        }
    }

    setActiveCalculator = (name) => {
        this.setState({active: name})
    }

    setBuy = (evt) => {
        let buy = +evt.target.value;
        let sell = buy * 1.01;
        this.setState({ buy: buy, sell: sell});
        document.getElementById('sel').value = sell;
    }

    setSell = (evt) => {
        this.setState({ sell: +evt.target.value });
    }

    setQty = (evt) => {
        this.setState({ qty: +evt.target.value });
    }

    toggleCharges = () => {
        document.body.classList.toggle('show-charges');
    }

    render () {
        return (
            <div class="container">

                <div className="charges-toggle">
                    <div className="btn-charges" onClick={() => this.toggleCharges()}>Charges</div>
                </div>

                <ul className="nav nav-tabs mt-4">
                    <li className="nav-item" onClick={() => this.setActiveCalculator('mis')}>
                        <div className={`nav-link ${this.state.active === "mis" ? 'active':''}`}>MIS</div>
                    </li>
                    <li className="nav-item" onClick={() => this.setActiveCalculator('cnc')}>
                        <div className={`nav-link ${this.state.active === "cnc" ? 'active':''}`}>CNC</div>
                    </li>
                    <li className="nav-item" onClick={() => this.setActiveCalculator('f')}>
                        <div className={`nav-link ${this.state.active === "f" ? 'active':''}`}>F</div>
                    </li>
                    <li className="nav-item" onClick={() => this.setActiveCalculator('o')}>
                        <div className={`nav-link ${this.state.active === "o" ? 'active':''}`}>O</div>
                    </li>
                </ul>

                <div className="tab-panel mt-3">
                    <div className="inputs row">

                        <div className="col">
                            <label class="form-label">Buy</label>
                            <input type="number" step="0.05" placeholder="buy" id="buy" onChange={this.setBuy} onKeyUp={this.setBuy} defaultValue={this.state.buy} className="form-control"/>
                        </div>
                        <div className="col">
                            <label class="form-label">Sell</label>
                            <input type="number" step="0.05" placeholder="sell" id="sel" onChange={this.setSell} onKeyUp={this.setSell} defaultValue={this.state.sell} className="form-control"/>
                        </div>

                        <div className="col-12 mt-3">
                            <span className="d-flex justify-content-between">Qty: {this.state.qty} <span>{this.state.buy} * {this.state.qty} = <b>₹{this.state.buy * this.state.qty}</b></span></span>
                            <input type="range" defaultValue={this.state.qty} step="25" min="25" max="2500" placeholder="qty" id="qty" onChange={this.setQty} onKeyUp={this.setQty} className="form-range"/>
                        </div>
                    </div>

                    <div className="calculations mt-3">
                        {this.state.active === 'mis' && <MIS buy={this.state.buy} sell={this.state.sell} qty={this.state.qty} />}
                        {this.state.active === 'cnc' && <CNC buy={this.state.buy} sell={this.state.sell} qty={this.state.qty} />}
                        {this.state.active === 'o'  && <FO buy={this.state.buy} sell={this.state.sell} qty={this.state.qty} />}
                        {this.state.active === 'o'  && <FinvasiaFO buy={this.state.buy} sell={this.state.sell} qty={this.state.qty} />}
                    </div>
                </div>
            </div>
        )
    }
}