export const DbNode =({id, data}) => {
  return(
    <BaseNode
      id ={id}
      data= {data}
      label ="Database"
      outputs= {[{id: 'result'}]}
      fields={[
        {key:'dbName', label: 'Name', type: 'text', default: id.replace('customDb-', 'db_')},
        {key: 'host', label: 'Host', type: 'text', default: 'localhost'},
        {key: 'port', label: 'Port', type: 'text', default: '5432'},
        { key: 'query', label: 'Query', type: 'text', default: 'SELECT * FROM' }
      ]}
    />
  )
}