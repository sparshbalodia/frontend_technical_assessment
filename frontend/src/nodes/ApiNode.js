export const ApiNode =({id, data}) => {
  return (
    <BaseNode
      id ={id}
      data= {data}
      label ="API"
      inputs= {[{id: 'body'}]}
      outputs= {[{id: 'response'}]}
      fields={[
        {key:'apiName', label: 'Name', type: 'text', default: id.replace('customApi-', 'api_')},
        {key: 'endpoint', label: 'Endpoint', type: 'text', default: 'https://api.example.com/data'},
        {key: 'method', label: 'Method', type: 'select', options: ['GET', 'POST'] }
      ]}
    />
  )
}