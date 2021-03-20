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
            netpl: 0,
            magicNumber: (x) => {}
        }
    }

    componentDidMount() {
        this.calculate();
        [...document.getElementsByClassName('sellPriceFin')].forEach(elem => {
            elem.addEventListener('click', (e) => {
                this.props.setSell(e.target.innerText);
            })
        })
    }

    componentDidUpdate(prevProps) {
        let { buy, sell, qty, bal } = this.props;
        if (buy !== prevProps.buy || sell !== prevProps.sell || qty !== prevProps.qty || bal !== prevProps.bal) {
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
        }, () => {
            this.calcStopLoss();
        })


    }

    calcStopLoss = () => {

        /*
        let turnover = (b + s) * q;
        = bq + sq

        let stt = s * q * 0.0005;
        = 0.0005sq;

        let exchange = 0.00053 * ((b + s) * q);
        = 0.00053 * (bq + sq);
        = 0.00053bq + 0.00053sq;

        let gst = 0.18 * (0.00053 * ((b + s) * q));
        = 0.0000954bq + 0.0000954sq

        let sebi = ((b + s) * q) * 0.0000005;
        = (bq + sq) * 0.0000005
        = 0.0000005bq + 0.0000005sq

        let stampduty = b * q * 0.00003;
        = 0.00003bq


        p = ((s - b) * q) - (stt + exchange + gst + sebi + stampduty)
        p = (sq - bq) - (stt + exchange + gst + sebi + stampduty)
        p = (sq - bq) - (0.0005sq + 0.00053bq + 0.00053sq + 0.0000954bq + 0.0000954sq + 0.0000005bq + 0.0000005sq + 0.00003bq)
        p = (sq - bq) - (0.0005sq + 0.00053sq + 0.0000954sq + 0.0000005sq + 0.00053bq + 0.0000954bq + 0.0000005bq + 0.00003bq)
        p = sq - bq - (0.0011259sq + 0.0006559bq)
        p = sq - bq - 0.0011259sq + 0.0006559bq
        p = sq - 0.0011259sq - bq + 0.0006559bq
        p = 0.9988741sq - 1.0006559bq
        p = q(0.9988741s - 1.0006559b)
        p/q = 0.9988741s - 1.0006559b
        p/q + 1.0006559b = 0.9988741s;
        (p + 1.0006559bq)/0.9988741q = s;
        s = (p + 1.0006559bq)/0.9988741q;
        */

        //let target = this.props.bal * -0.01;
        //let magicNumber = ((target + (1.0006559 * this.props.buy * this.props.qty)) / (0.9988741 * this.props.qty)) - this.props.buy;
        this.setState({
            magicNumber: (target, isSimple) => {
                let simple = this.props.buy + (this.props.buy/100 * target * 2);
                let adv = ((this.props.bal * target/100) + (1.0006559 * this.props.buy * this.props.qty)) / (0.9988741 * this.props.qty);
                return isSimple ? simple.toFixed(2) : adv.toFixed(2);
            }
        })
    }

    render() {
        return (
            <>
                <table className="table table-bordered table-success table-striped finvasia">
                    <tbody>
                        <tr>
                            <th>Stoploss (-1%)</th>
                            <td className="text-danger">
                                <span className="sellPrice sellPriceFin">{this.state.magicNumber(-1, true)}</span>
                                <span className="sellPrice sellPriceFin">{this.state.magicNumber(-1, false)}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>Breakeven</th>
                            <td className="text-decoration-underline text-muted">
                                <span className="sellPrice sellPriceFin">{(this.state.breakeven + this.props.buy).toFixed(2)}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>Profit (1:1)</th>
                            <td>
                                <strong>
                                    <span className="sellPrice sellPriceFin">{this.state.magicNumber(1, true)}</span>
                                    <span className="sellPrice sellPriceFin">{this.state.magicNumber(1, false)}</span>
                                </strong>
                            </td>
                        </tr>
                        <tr>
                            <th>Profit (1:2)</th>
                            <td>
                                <span className="sellPrice sellPriceFin">{this.state.magicNumber(2, true)}</span>
                                <span className="sellPrice sellPriceFin">{this.state.magicNumber(2, false)}</span>
                            </td>
                        </tr>
                        <tr>
                            <th>Profit (1:3)</th>
                            <td>
                                <span className="sellPrice sellPriceFin">{this.state.magicNumber(3, true)}</span>
                                <span className="sellPrice sellPriceFin">{this.state.magicNumber(3, false)}</span>
                            </td>
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
                        <tr className="hide">
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