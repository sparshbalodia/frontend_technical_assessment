export const NoteNode =({id, data})=> {
  return(
    <BaseNode
      id={id}
      data={data}
      label="Note"
      fields={[
        {key: 'title', label: 'Title', type: 'text', default: id.replace('customNote-', 'note_')},
        {key: 'content', label: 'Content', type: 'text', default: ''}
      ]}
    />
  )
}