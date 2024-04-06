import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormContext = createContext({})

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => {
  const value = useContext(FormContext)
  return value
}

const Form = ({ children, initialData, submitLabel = 'Submit' }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialData || {})

  const handleUpdateField = (name, value) => {
    setFormData(state => ({ ...state, [name]: value }))
  }

  const onChange = (evt) => {
    handleUpdateField(evt.target.name, evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    console.log('form submitted')
    console.log(formData)
  }

  const formContext = { formData, onChange, handleUpdateField }

  return (
    <FormContext.Provider value={formContext}>
      <form onSubmit={onSubmit}>
        <div className="space-y-6">
          {children}
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            className="btn btn-neutral font-bold w-[93px]"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary font-bold w-36"
            type="submit"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </FormContext.Provider>
  )
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  initialData: PropTypes.object,
  submitLabel: PropTypes.string,
}

export default Form
