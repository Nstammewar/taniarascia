import React, { Component } from 'react';

class Table extends Component {
  render() {
    const {characterData,removeCharacter}=this.props
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }
}
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name </th>
        <th>Job </th>

      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={()=>{
             console.log("calling on click  "+ index)
            props.removeCharacter(index)
          console.log("onClick  "+ index)} }>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}
export default Table