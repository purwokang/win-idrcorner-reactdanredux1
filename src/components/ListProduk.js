import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ambilData } from '../action'

export class ListProduk extends Component {

    componentDidMount() {
        this.props.ambilData()
    }

    renderList() {
        return this.props.listProduk.map(produk => {
            return (
                <div key={produk.id} >
                    <h3>{produk.namaproduk}</h3>

                </div>
            )
        })
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const stateToProps = state => {
    return { listProduk: state.listProduk }
}

export default connect(stateToProps, { ambilData })(ListProduk)


