import React from 'react';

export default class CNC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            turnover: 0,
            brokerage: 40,
            stt: 0,
            exchange: 0,
            clearing: 0,
            gst: 0,
            sebi: 0,
            stampduty: 0,
            totaltax: 0
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
        let brokerage = 40;
        let turnover = (this.props.buy + this.props.sell) * this.props.qty;
        let stt = this.props.sell * this.props.qty * 0.0005;
        let exchange = 0.00053 * turnover;
        let clearing = 0;
        let gst = 0.18 * (brokerage + exchange);
        let sebi = turnover * 0.0000005;
        let stampduty = this.props.buy * this.props.qty * 0.00003;

        this.setState({
            turnover: turnover,
            stt: stt.toFixed(2),
            exchange: exchange,
            gst: gst.toFixed(2),
            sebi: sebi.toFixed(2),
            stampduty: stampduty.toFixed(2),
            totaltax: (brokerage + stt + exchange + clearing + gst + sebi + stampduty).toFixed(2)
        })
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>Turnover</td>
                        <td>{this.state.turnover}</td>
                    </tr>
                    <tr>
                        <td>Brokerage</td>
                        <td>{this.state.brokerage}</td>
                    </tr>
                    <tr>
                        <td>STT Total</td>
                        <td>{this.state.stt}</td>
                    </tr>
                    <tr>
                        <td>Exchange Txn</td>
                        <td>{this.state.exchange}</td>
                    </tr>
                    <tr>
                        <td>Clearing Charge</td>
                        <td>{this.state.clearing}</td>
                    </tr>
                    <tr>
                        <td>GST</td>
                        <td>{this.state.gst}</td>
                    </tr>
                    <tr>
                        <td>SEBI Charges</td>
                        <td>{this.state.sebi}</td>
                    </tr>
                    <tr>
                        <td>Stamp Duty</td>
                        <td>{this.state.stampduty}</td>
                    </tr>
                    <tr>
                        <td>Amount Spent</td>
                        <td>{this.props.buy * this.props.qty}</td>
                    </tr>
                    <tr>
                        <td>Profit</td>
                        <td>{(this.props.sell - this.props.buy) * this.props.qty}</td>
                    </tr>
                    <tr>
                        <td>Total Tax</td>
                        <td>{this.state.totaltax}</td>
                    </tr>
                    <tr>
                        <td>Net P&L</td>
                        <td>{(((this.props.sell - this.props.buy) * this.props.qty) - this.state.totaltax).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>P&L %</td>
                        <td>{(((((this.props.sell - this.props.buy) * this.props.qty) - this.state.totaltax)/(this.props.buy * this.props.qty)) * 100).toFixed(2)}%</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}