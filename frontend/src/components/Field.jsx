import PropTypes from 'prop-types'
import { useFormContext } from './Form'
import Select from './Select'
import Option from './Option'

const TextInput = ({ name }) => {
  const { formData, onChange } = useFormContext()
  const value = formData[name] || ''

  return (
    <input
      type="text"
      className="input"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}

const TextArea = ({ name }) => {
  const { formData, onChange } = useFormContext()
  const value = formData[name] || ''

  return (
    <textarea
      className="textarea h-24 resize-none"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}

const CustomSelect = ({ name, items }) => {
  const { formData, handleUpdateField } = useFormContext()
  const value = formData[name] || ''

  return (
    <Select
      name={name}
      initialIndex={items.findIndex(item => item.value === value)}
      updateField={handleUpdateField}
    >
      {items.map(({ label, value }) => (
        <Option key={value} label={label} value={value} />
      ))}
    </Select>
  )
}

const Field = ({ type = 'text', name, label, description, items }) => {
  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className="font-bold mb-0.5 tracking-[-0.19px]"
      >
        {label}
      </label>
      <p
        id={`${name}-description`}
        className="mb-4 text-base-content"
      >
        {description}
      </p>
      {type === 'textarea' ? (
        <TextArea name={name} />
      ) : type === 'select' ? (
        <CustomSelect name={name} items={items} />
      ) : (
        <TextInput name={name} />
      )}
    </div>
  )
}

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
}

TextInput.propTypes = { name: PropTypes.string.isRequired }
TextArea.propTypes = { name: PropTypes.string.isRequired }
CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
}

export default Field
