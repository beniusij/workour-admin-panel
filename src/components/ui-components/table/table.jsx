import React, { Component } from 'react'
import style from './table.module.scss'
import EditButton from "../../pages/data-page/buttons/edit-button";
import DeleteButton from "../../pages/data-page/buttons/delete-button";

/**
 * @param props
 * @returns {*}
 * @constructor
 */
class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      headers: props.headers,
      data: props.data
    }
  }

  render() {
    const headers = this.state.headers.map(
      (heading, key) => <th key={key} className={style.heading}>{heading}</th>
    )
    const data = this.state.data.map(
      (row, key) => <tr key={key}>
        {
          Object.keys(row).map(
          (value, key) => <td className={style.dataCell} key={key}>{row[value]}</td>
          )
        }
        <td className={style.dataCell}>
          <EditButton/>
        </td>
        <td className={style.dataCell}>
          <DeleteButton/>
        </td>
      </tr>
    )

    return (
      <table className={style.table}>
        <caption>Users</caption>
        <tbody>
        <tr className={style.row}>
          {headers}
          <th colSpan={2} className={style.heading}>Actions</th>
        </tr>
        {data}
        </tbody>
      </table>
    )
  }
}

export default Table