import React, {useState} from 'react'
import { Table, Form } from 'react-bootstrap'


function TableComponent({tableData}) {

    const [selectAll, setSelectAll] = useState(false)
    const [checkedRows, setCheckedRows] = useState(Array(tableData.length).fill(false))
  
    const handleSelectAll = () => {
      setSelectAll(!selectAll)
      setCheckedRows(Array(tableData.length).fill(!selectAll))
    }
  
    const handleRowCheck = (index) => {
      const updatedCheckedRows = [...checkedRows]
      updatedCheckedRows[index] = !updatedCheckedRows[index]
      setCheckedRows(updatedCheckedRows)
  
      const allChecked = updatedCheckedRows.every((checked) => checked)
      setSelectAll(allChecked)
    }
  
    const renderTableBody = (data) => {
      const keys = Object.keys(data)
      var list = []
      for ( var i = 0; i < keys.length; i++) {
        list.push(<td key={keys[i]}>{data[keys[i]]}</td>)
      }
      return list
    }

  return (
    <>
        <Table striped hover bordered>
            <thead>
            <tr>
                {Object.keys(tableData[0]).map((key) => (
                <th key={key}>{key}</th>
                ))}
                <th>
                <Form>
                    <Form.Check
                    checked={selectAll}
                    onChange={handleSelectAll}
                    />
                </Form>
                </th>
            </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => (
                <tr key={index}>
                    {renderTableBody(data)}
                    <td>
                    <Form>
                        <Form.Check
                        checked={checkedRows[index]}
                        onChange={() => handleRowCheck(index)}
                        />
                    </Form>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
    </>
  )
}

export default TableComponent
