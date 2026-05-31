export const EmailNode = ({id, data}) => {
  return(
    <BaseNode
      id={id}
      data = {data}
      label= "Email"
      inputs={[{id: 'input'}]}
      outputs={[{id: 'success'}]}
      fields={[
        {key:'emailName', label: 'Name', type: 'text', default: id.replace('customEmail-', 'email_')},
        {key: 'recipient', label: 'To:', type: 'text', default: data?.recipient || ''},
        {key: 'subject', label: 'Subject:', type: 'text', default: data?.subject || ''},
        {key: 'body', label: 'Body:', type: 'text', default: data?.body || ''},
      ]}
    />
  )
}