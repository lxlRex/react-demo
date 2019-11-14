import React from 'react';
export default class Amount extends React.Component {
    constructor(props) {
        super(props);
        this.current = 0;
        this.numChange = () => {
            const { from = 0, value } = this.props;
            this.current = from;
            this.timer = setInterval(() => {
                let sub = value - this.current;
                if (sub !== 0) {
                    this.amount.current.innerHTML = sub > 0 ? ++this.current : --this.current;
                }
                else {
                    clearInterval(this.timer);
                }
            }, 1);
        };
        this.amount = React.createRef();
    }
    render() {
        return (React.createElement("span", { ref: this.amount }));
    }
    componentDidMount() {
        this.numChange();
    }
    componentWillReceiveProps() {
        this.numChange();
    }
}
Amount.defaultProps = {
    from: 0
};
