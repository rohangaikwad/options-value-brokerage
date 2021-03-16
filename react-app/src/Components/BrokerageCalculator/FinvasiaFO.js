import React from 'react';

export default class FinvasiaFO extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            turnover: 0,
            brokerage: 0,
            stt: 0,
            exchange: 0,
            clearing: 0,
            gst: 0,
            sebi: 0,
            stampduty: 0,
            totaltax: 0,
            breakeven: 0,
            pl: 0,
            netpl: 0
        }
    }

    componentDidMount() {
        this.calculate();
    }

    componentDidUpdate(prevProps) {
        let { buy, sell, qty } = this.props;
        if (buy !== prevProps.buy || sell !== prevProps.sell || qty !== prevProps.qty) {
            this.calculate();
        }
    }

    calculate = () => {
        let brokerage = 0;
        let turnover = (this.props.buy + this.props.sell) * this.props.qty;
        let stt = this.props.sell * this.props.qty * 0.0005;
        let exchange = 0.00053 * turnover;
        let clearing = 0;
        let gst = 0.18 * (brokerage + exchange);
        let sebi = turnover * 0.0000005;
        let stampduty = this.props.buy * this.props.qty * 0.00003;
        let totaltax = brokerage + stt + exchange + clearing + gst + sebi + stampduty;
        let breakeven = totaltax/this.props.qty;
        let pl = (this.props.sell - this.props.buy) * this.props.qty;
        let netpl = pl-totaltax;

        this.setState({
            turnover: turnover,
            stt: stt.toFixed(2),
            exchange: exchange.toFixed(2),
            gst: gst.toFixed(2),
            sebi: sebi.toFixed(2),
            stampduty: stampduty.toFixed(2),
            totaltax: totaltax.toFixed(2),
            breakeven: breakeven,
            pl: pl,
            netpl: netpl
        })
    }

    render() {
        return (
            <>
                <table className="table table-bordered table-success table-striped">
                    <tbody>
                        <tr>
                            <th>Breakeven</th>
                            <td>{(this.state.breakeven + this.props.buy).toFixed(2)}</td>
                        </tr>
                        <tr className="hide">
                            <th>Turnover</th>
                            <td>{this.state.turnover.toFixed(2)}</td>
                        </tr>
                        <tr className="hide">
                            <th>Brokerage</th>
                            <td>{this.state.brokerage.toFixed(2)}</td>
                        </tr>
                        <tr className="hide">
                            <th>STT Total</th>
                            <td>{this.state.stt}</td>
                        </tr>
                        <tr className="hide">
                            <th>Exchange Txn</th>
                            <td>{this.state.exchange}</td>
                        </tr>
                        <tr className="hide">
                            <th>Clearing Charge</th>
                            <td>{this.state.clearing.toFixed(2)}</td>
                        </tr>
                        <tr className="hide">
                            <th>GST</th>
                            <td>{this.state.gst}</td>
                        </tr>
                        <tr className="hide">
                            <th>SEBI Charges</th>
                            <td>{this.state.sebi}</td>
                        </tr>
                        <tr className="hide">
                            <th>Stamp Duty</th>
                            <td>{this.state.stampduty}</td>
                        </tr>
                        <tr className="hide">
                            <th>Profit</th>
                            <td>{this.state.pl.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th>Charges</th>
                            <td>{this.state.totaltax}</td>
                        </tr>
                        <tr>
                            <th>Net P&L</th>
                            <td className={this.state.netpl >= 0 ? 'profit' : 'loss'}><strong>{this.state.netpl.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}